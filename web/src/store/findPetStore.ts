import { create } from "zustand";

interface PetImage {
  created_at: string;
  id: string;
  path: string;
  pet_id: string;
}

export interface Pet {
  id: string;
  created_at: Date;
  city: string;
  name: string;
  description: string;
  age: string;
  energyLevel: string;
  animalSize: string;
  levelOfIndependence: string;
  animalType: string;
  enviroment: string;
  requirement: string[];
  petImage: PetImage[];
  org_id: string;
}

interface FindPetStore {
  pet: Pet[];
  refreshPetList: (item: Pet[]) => void;
}

export const findPetStore = create<FindPetStore>()((set) => ({
  pet: [],
  refreshPetList: (item) => set({ pet: item }),
}));
