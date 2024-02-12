import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-respository";
import { OrgRegisterUseCase } from "../org-register";

export function makeOrgRegisterUseCase() {
  const OrgsRepository = new PrismaOrgsRepository();
  const useCase = new OrgRegisterUseCase(OrgsRepository);

  return useCase;
}
