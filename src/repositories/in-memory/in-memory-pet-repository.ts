import { Prisma, Pet, Age, Size, Independence } from "@prisma/client";
import { randomUUID } from "crypto";
import { PetsRepository } from "../pet-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = [];

  async findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string
  ) {
    const pet = this.items.filter(
      (item) =>
        (item.age === age ||
          item.animalSize === animalSize ||
          item.energyLevel === energyLevel ||
          item.levelOfIndependence === levelOfIndependence) &&
        item.city === city
    );

    return pet;
  }

  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      name: data.name,
      city: data.city,
      description: data.description,
      created_at: new Date(),
      energyLevel: data.energyLevel,
      animalSize: data.animalSize,
      levelOfIndependence: data.levelOfIndependence,
      age: data.age,
      enviroment: data.enviroment,
      org_id: data.org_id,
      requirement: data.requirement,
    };

    this.items.push(pet);

    return pet;
  }
}
