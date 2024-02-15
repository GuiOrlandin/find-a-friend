import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { findPetByCityUseCase } from "../find-pet-by-city";

export function makeFindPetByCityUseCase() {
  const PetsRepository = new PrismaPetsRepository();
  const useCase = new findPetByCityUseCase(PetsRepository);

  return useCase;
}
