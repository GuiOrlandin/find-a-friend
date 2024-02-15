import { Age, Independence, Pet, Size } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";

interface findPetByCharacteristicsUseCaseRequest {
  age: Age;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
  city: string;
  page: number;
}

interface findPetByCharacteristicsUseCaseResponse {
  pets: Pet[];
}

export class findPetByCharacteristicsUseCase {
  constructor(private petRepository: PetsRepository) {}

  async execute({
    age,
    energyLevel,
    animalSize,
    levelOfIndependence,
    city,
    page,
  }: findPetByCharacteristicsUseCaseRequest): Promise<findPetByCharacteristicsUseCaseResponse> {
    const pets = await this.petRepository.findByCharacteristics(
      age,
      energyLevel,
      animalSize,
      levelOfIndependence,
      city,
      page
    );

    return {
      pets,
    };
  }
}
