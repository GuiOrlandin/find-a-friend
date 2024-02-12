import { PrismaPetsRepository } from "@/repositories/prisma/prisma-pets-repository";
import { FindPetUseCase } from "../find-pet";

export function makeFindPetUseCase() {
  const PetsRepository = new PrismaPetsRepository();
  const useCase = new FindPetUseCase(PetsRepository);

  return useCase;
}
