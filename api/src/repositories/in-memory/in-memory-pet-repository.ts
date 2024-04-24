import { Prisma, Pet, Age, Size, Independence, $Enums } from "@prisma/client";
import { randomUUID } from "crypto";
import { PetsRepository } from "../pet-repository";

export class InMemoryPetsRepository implements PetsRepository {
  public items: Pet[] = [];

  async findByCity(city: string, page: number) {
    const pet = this.items
      .filter((item) => item.city === city)
      .slice((page - 1) * 20, page * 20);

    return pet;
  }

  async findById(id: string) {
    const pet = this.items.find((item) => item.id === id);

    if (pet) {
      return pet;
    } else {
      return null;
    }
  }

  async findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string,
    page: number
  ) {
    const pet = this.items
      .filter(
        (item) =>
          (item.age === age ||
            item.animalSize === animalSize ||
            item.energyLevel === energyLevel ||
            item.levelOfIndependence === levelOfIndependence) &&
          item.city === city
      )
      .slice((page - 1) * 20, page * 20);

    return pet;
  }

  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = {
      id: randomUUID(),
      name: data.name,
      city: data.city,
      description: data.description as string,
      created_at: new Date(),
      energyLevel: data.energyLevel,
      animalSize: data.animalSize,
      levelOfIndependence: data.levelOfIndependence,
      age: data.age,
      enviroment: data.enviroment,
      org_id: data.org_id,
      requirement: data.requirement as string[],
      animalType: data.animalType,
    };

    this.items.push(pet);

    return pet;
  }
}
