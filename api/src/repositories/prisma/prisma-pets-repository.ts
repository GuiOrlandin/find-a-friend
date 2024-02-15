import { $Enums, Age, Independence, Pet, Prisma, Size } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { PetsRepository } from "../pet-repository";

export class PrismaPetsRepository implements PetsRepository {
  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    });

    return pet;
  }

  async findByCity(city: string, page: number) {
    const pets = await prisma.pet.findMany({
      where: {
        city,
      },
      take: 5,
      skip: (page - 1) * 5,
    });
    return pets;
  }

  async findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string,
    page: number
  ): Promise<Pet[]> {
    const pets = await prisma.pet.findMany({
      where: {
        AND: [
          {
            OR: [
              {
                age,
              },
              {
                animalSize,
              },
              {
                energyLevel,
              },
              {
                levelOfIndependence,
              },
            ],
          },
          {
            city,
          },
        ],
      },
      take: 5,
      skip: (page - 1) * 5,
    });
    return pets;
  }
}
