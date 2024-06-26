import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pet-repository";
import { InMemoryOrgsRepository } from "@/repositories/in-memory/in-memory-org-respository";
import { findPetByCharacteristicsUseCase } from "./find-pet-by-characteristics";

let petsRepository: InMemoryPetsRepository;
let orgsRepository: InMemoryOrgsRepository;

let sut: findPetByCharacteristicsUseCase;

describe("Find Pet by Characteristics Use Case ", () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository();
    orgsRepository = new InMemoryOrgsRepository();
    sut = new findPetByCharacteristicsUseCase(petsRepository);
  });
  it("it should  be able to register a pet", async () => {
    const org = await orgsRepository.create({
      adress: "Rua santa ernestina",
      CEP: "14820000",
      city: "americo",
      email: "guiorlandin@gmail.com",
      name: "Guilherme",
      password_hash: "123456",
      phone: "43984862237",
      role: "ADMIN",
      state: "SP",
    });

    petsRepository.register({
      name: "Jule",
      city: "americo",
      description: [" Cachorro de porte grande e dócio"],
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "GRANDE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
      org_id: org.id,
      animalType: "Cachorro",
    });

    petsRepository.register({
      name: "Jule",
      city: "judiai",
      description: [" Cachorro de porte grande e dócio", "Bastante agitado"],
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "GRANDE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
      org_id: org.id,
      animalType: "Cachorro",
    });

    const response = await sut.execute({
      age: "ADULTO",
      animalSize: "GRANDE",
      city: "americo",
      energyLevel: "03",
      levelOfIndependence: "BAIXO",
      page: 1,
    });

    expect(response.pets).length(1);
  });
});
