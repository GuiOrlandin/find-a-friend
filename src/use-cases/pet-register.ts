import { Age, Independence, Pet, Prisma, Size } from "@prisma/client";
import { PetsRepository } from "@/repositories/pet-repository";
import { OrgsRepository } from "@/repositories/org-repository";
import { OrgDoesNotExistError } from "./errors/org-does-not-exist";

interface PetRegisterUseCaseRequest {
  name: string;
  city: string;
  description: string[];
  age: Age;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
  enviroment: Size;
  requirement: string;
  org_id: string;
  petImage?: Array<Prisma.PetImageUncheckedCreateWithoutPetInput>
}

interface PetRegisterUseCaseResponse {
  pet: Pet;
}

export class PetRegisterUseCase {
  constructor(
    private petRepository: PetsRepository,
    private orgsRepository: OrgsRepository
  ) {}

  async execute(
    data: PetRegisterUseCaseRequest): Promise<PetRegisterUseCaseResponse> {
    const org = await this.orgsRepository.findById(data.org_id);

    if (!org) {
      throw new OrgDoesNotExistError();
    }

    const pet = await this.petRepository.register({
      name:data.name,
      city:data.city,
      description:data.description,
      age:data.age,
      energyLevel:data.energyLevel,
      animalSize:data.animalSize,
      levelOfIndependence:data.levelOfIndependence,
      enviroment:data.enviroment,
      requirement:data.requirement,
      org_id:data.org_id,
      PetImage:{
        create: data.petImage,
      }
    });

    return {
      pet,
    };
  }
}
