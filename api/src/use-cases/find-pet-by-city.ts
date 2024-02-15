import { Pet } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";

interface findPetByCityUseCaseRequest {
  city: string;
  page: number;
}

interface findPetByCityUseCaseResponse {
  pets: Pet[];
}

export class findPetByCityUseCase {
  constructor(private petRepository: PetsRepository) {}

  async execute({
    city,
    page,
  }: findPetByCityUseCaseRequest): Promise<findPetByCityUseCaseResponse> {
    const pets = await this.petRepository.findByCity(city, page);

    return {
      pets,
    };
  }
}
