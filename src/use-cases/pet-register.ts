import { Age, Independence, Pet, Size } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";
import { OrgsRepository } from "@/repositories/org-repository";
import { OrgDoesNotExistError } from "./errors/org-does-not-exist";

interface PetRegisterUseCaseRequest {
  name: string;
  city: string;
  description: string;
  age: Age;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
  enviroment: Size;
  requirement: string;
  org_id: string;
}

interface PetRegisterUseCaseResponse {
  pet: Pet;
}

export class PetRegisterUseCase {
  constructor(
    private petRepository: PetsRepository,
    private orgsRepository: OrgsRepository
  ) {}

  async execute({
    name,
    city,
    description,
    age,
    energyLevel,
    animalSize,
    levelOfIndependence,
    enviroment,
    requirement,
    org_id,
  }: PetRegisterUseCaseRequest): Promise<PetRegisterUseCaseResponse> {
    const org = await this.orgsRepository.findById(org_id);

    if (!org) {
      throw new OrgDoesNotExistError();
    }

    const pet = await this.petRepository.register({
      name,
      city,
      description,
      age,
      energyLevel,
      animalSize,
      levelOfIndependence,
      enviroment,
      requirement,
      org_id,
    });

    return {
      pet,
    };
  }
}
