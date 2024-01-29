import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryPetsRepository } from "@/repositories/in-memory/in-memory-pet-repository";
import { PetRegisterUseCase } from "./pet-register";
import { InMemoryOrgsRepository } from "@/repositories/in-memory/in-memory-org-respository";

let petsRepository: InMemoryPetsRepository;
let orgsRepository: InMemoryOrgsRepository;
let sut: PetRegisterUseCase;

describe("Pet Register Use Case ", () => {
  beforeEach(() => {
    petsRepository = new InMemoryPetsRepository();
    orgsRepository = new InMemoryOrgsRepository();
    sut = new PetRegisterUseCase(petsRepository, orgsRepository);
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

    console.log(org);

    const { pet } = await sut.execute({
      name: "Jule",
      city: "Aco",
      description: " Cachorro de perto grande e dócio",
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "LARGE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
      org_id: org.id,
    });

    console.log(pet);

    expect(pet.id).toEqual(expect.any(String));
  });
});
