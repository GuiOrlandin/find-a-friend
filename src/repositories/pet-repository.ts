import { Independence, Org, Pet, Prisma, Size } from "@prisma/client";

export interface Characteristics {
  age: string;
  energyLevel: string;
  animalSize: Size;
  levelOfIndependence: Independence;
}

export interface PetsRepository {
  findByCharacteristics(characteristics: Characteristics): Promise<Pet | null>;
  register(data: Prisma.PetUncheckedCreateInput): Promise<Pet>;
}
