import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { findPetByCharacteristicsUseCase } from "../find-pet-by-characteristics";

export function makeFindPetByCharacteristicsUseCase() {
  const PetsRepository = new PrismaPetsRepository();
  const useCase = new findPetByCharacteristicsUseCase(PetsRepository);

  return useCase;
}
