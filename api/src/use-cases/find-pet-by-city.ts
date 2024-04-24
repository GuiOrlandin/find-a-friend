import { Pet } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

interface findPetByCityOrIdUseCaseRequest {
  city?: string;
  id?: string;
  page?: number;
}

interface findPetByCityUseCaseResponse {
  pets?: Pet[] | Pet | null;
}

export class findPetByCityUseCase {
  constructor(private petRepository: PetsRepository) {}

  async execute({
    city,
    page,
    id,
  }: findPetByCityOrIdUseCaseRequest): Promise<findPetByCityUseCaseResponse> {
    if (id) {
      const pets = await this.petRepository.findById(id);

      return {
        pets,
      };
    }

    if (city && page) {
      const pets = await this.petRepository.findByCity(city, page);

      return {
        pets,
      };
    }

    throw new InvalidCredentialsError();
  }
}
