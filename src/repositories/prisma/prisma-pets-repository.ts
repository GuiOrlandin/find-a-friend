import { Age, Independence, Pet, Prisma, Size } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { PetsRepository } from "../pet-repository";

export class PrismaPetsRepository implements PetsRepository {
  async register(data: Prisma.PetUncheckedCreateInput) {
    const pet = await prisma.pet.create({
      data,
    });

    return pet;
  }

  async findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string
  ): Promise<Pet[] | null> {
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
    });

    return pets;
  }
}
