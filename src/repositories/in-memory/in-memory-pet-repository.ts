import { Prisma, Pet } from "@prisma/client";
import { randomUUID } from "crypto";
import { Characteristics, PetsRepository } from "../pet-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = [];

  async findByCharacteristics(characteristics: Characteristics) {
    const pet = this.items.find(
      (item) =>
        item.age === characteristics.age ||
        item.animalSize === characteristics.animalSize ||
        item.energyLevel === characteristics.energyLevel ||
        item.levelOfIndependence === characteristics.levelOfIndependence
    );

    if (!pet) {
      return null;
    }

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
