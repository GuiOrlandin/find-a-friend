import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pet-repository";
import { InMemoryOrgsRepository } from "@/repositories/in-memory/in-memory-org-respository";
import { FindPetUseCase } from "./find-pet";

let petsRepository: InMemoryPetsRepository;
let orgsRepository: InMemoryOrgsRepository;

let sut: FindPetUseCase;

describe("Find Pet Use Case ", () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository();
    orgsRepository = new InMemoryOrgsRepository();
    sut = new FindPetUseCase(petsRepository);
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
    });

    petsRepository.register({
      name: "Jule",
      city: "americo",
      description: " Cachorro de porte grande e dócio",
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "GRANDE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
      org_id: org.id,
    });

    petsRepository.register({
      name: "Jule",
      city: "judiai",
      description: " Cachorro de porte grande e dócio",
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "GRANDE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
      org_id: org.id,
    });

    const response = await sut.execute({
      age: "ADULTO",
      animalSize: "GRANDE",
      city: "americo",
      energyLevel: "03",
      levelOfIndependence: "BAIXO",
    });

    console.log(response);

    expect(response.pet).length(1);
  });
});
