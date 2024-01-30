import { Age, Independence, Pet, Size } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";

interface FindPetUseCaseRequest {
  age: Age;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
  city: string;
}

interface FindPetUseCaseResponse {
  pet: Pet[];
}

export class FindPetUseCase {
  constructor(private petRepository: PetsRepository) {}

  async execute({
    age,
    energyLevel,
    animalSize,
    levelOfIndependence,
    city,
  }: FindPetUseCaseRequest): Promise<FindPetUseCaseResponse> {
    const pet = await this.petRepository.findByCharacteristics(
      age,
      energyLevel,
      animalSize,
      levelOfIndependence,
      city
    );

    return {
      pet,
    };
  }
}
