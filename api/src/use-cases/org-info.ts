import { OrgsRepository } from "@/repositories/org-repository";
import { Org } from "@prisma/client";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface OrgInfoUseCaseRequest {
  email?: string;
  id?: string;
}

interface OrgInfoUseCaseResponse {
  org: Org;
}

export class OrgInfoUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    email,
    id,
  }: OrgInfoUseCaseRequest): Promise<OrgInfoUseCaseResponse> {
    if (email) {
      const org = await this.orgsRepository.findByEmail(email);

      if (!org) {
        throw new InvalidCredentialsError();
      }

      return {
        org,
      };
    }

    if (id) {
      const org = await this.orgsRepository.findById(id);

      if (!org) {
        throw new InvalidCredentialsError();
      }

      return {
        org,
      };
    }

    throw new InvalidCredentialsError();
  }
}
