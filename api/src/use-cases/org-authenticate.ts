import { OrgsRepository } from "@/repositories/org-repository";
import { Org } from "@prisma/client";
import { compare } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface OrgAuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface OrgAuthenticateUseCaseResponse {
  org: Org;
}

export class OrgAuthenticateUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
    password,
  }: OrgAuthenticateUseCaseRequest): Promise<OrgAuthenticateUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email);

    if (!org) {
      throw new InvalidCredentialsError();
    }

    const passwordMatch = await compare(password, org.password_hash);

    if (!passwordMatch) {
      throw new InvalidCredentialsError();
    }

    return { org };
  }
}
