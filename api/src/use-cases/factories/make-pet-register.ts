import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { PetRegisterUseCase } from "../pet-register";
import { PrismaOrgsRepository } from "@/repositories/prisma/prisma-orgs-respository";

export function makePetRegisterUseCase() {
  const PetsRepository = new PrismaPetsRepository();
  const OrgsRepository = new PrismaOrgsRepository();
  const useCase = new PetRegisterUseCase(PetsRepository, OrgsRepository);

  return useCase;
}
