import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-respository";
import { OrgAuthenticateUseCase } from "../org-authenticate";

export function makeOrgAuthenticateUseCase() {
  const OrgsRepository = new PrismaOrgsRepository();
  const useCase = new OrgAuthenticateUseCase(OrgsRepository);

  return useCase;
}
