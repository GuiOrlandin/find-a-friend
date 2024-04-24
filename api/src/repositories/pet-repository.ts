import { Age, Independence, Pet, Prisma, Size } from "@prisma/client";

export interface PetsRepository {
  findByCharacteristics(
    age: Age,
    energyLevel: string,
    animalSize: Size,
    levelOfIndependence: Independence,
    city: string,
    page: number
  ): Promise<Pet[]>;

  findById(id: string): Promise<Pet | null>;
  findByCity(city: string, page: number): Promise<Pet[]>;
  register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
}
