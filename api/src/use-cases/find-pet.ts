import { Age, Independence, Pet, Size } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";

interface FindPetUseCaseRequest {
  age: Age;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
  city: string;
  page: number;
}

interface FindPetUseCaseResponse {
  pets: Pet[];
}

export class FindPetUseCase {
  constructor(private petRepository: PetsRepository) {}

  async execute({
    age,
    energyLevel,
    animalSize,
    levelOfIndependence,
    city,
    page,
  }: FindPetUseCaseRequest): Promise<FindPetUseCaseResponse> {
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
