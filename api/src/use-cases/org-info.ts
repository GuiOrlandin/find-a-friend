import { OrgsRepository } from "@/repositories/org-repository";
import { Org } from "@prisma/client";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface OrgInfoUseCaseRequest {
  email: string;
}

interface OrgInfoUseCaseResponse {
  org: Org;
}

export class OrgInfoUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
  }: OrgInfoUseCaseRequest): Promise<OrgInfoUseCaseResponse> {
    const org = await this.orgsRepository.findByEmail(email);

    if (!org) {
      throw new InvalidCredentialsError();
    }

    return {
      org,
    };
  }
}
