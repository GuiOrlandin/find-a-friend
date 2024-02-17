import { create } from "zustand";

export interface Pet {
  id: string;
  created_at: Date;
  city: string;
  name: string;
  description: string[];
  age: string;
  energyLevel: string;
  animalSize: string;
  levelOfIndependence: string;
  enviroment: string;
  requirement: string;
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
