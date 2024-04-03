import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-respository";
import { OrgInfoUseCase } from "../org-info";

export function makeOrgInfoUseCase() {
  const OrgsRepository = new PrismaOrgsRepository();
  const useCase = new OrgInfoUseCase(OrgsRepository);

  return useCase;
}
