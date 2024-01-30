import { Age, Independence, Pet, Prisma, Size } from "@prisma/client";

export interface PetsRepository {
  findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string
  ): Promise<Pet[] | null>;
  register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
}
