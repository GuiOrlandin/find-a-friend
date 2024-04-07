import { beforeEach, describe, expect, it } from "vitest";
import { compare } from "bcryptjs";
import { OrgRegisterUseCase } from "./org-register";
import { OrgAlreadyExistsError } from "./errors/org-already-exists";
import { InMemoryOrgsRepository } from "../repositories/in-memory/in-memory-org-respository";

let orgsRepository: InMemoryOrgsRepository;
let sut: OrgRegisterUseCase;

describe("Register Use Case ", () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository();
    sut = new OrgRegisterUseCase(orgsRepository);
  });
  it("it should  be able to register a org", async () => {
    const { org } = await sut.execute({
      adress: "Rua santa ernestina",
      CEP: "14820000",
      city: "americo",
      email: "guiorlandin@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "43984862237",
      role: "ADMIN",
      state: "SP",
    });

    expect(org.id).toEqual(expect.any(String));
  });

  it("should hash org password upon registration", async () => {
    const { org } = await sut.execute({
      adress: "Rua santa ernestina",
      CEP: "14820000",
      city: "americo",
      email: "guiorlandin@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "43984862237",
      role: "ADMIN",
      state: "SP",
    });

    const isPasswordCorrectlyHashed = await compare(
      "123456",
      org.password_hash
    );

    expect(isPasswordCorrectlyHashed).toBe(true);
  });

  it("should not be able to register org with same email twice", async () => {
    await sut.execute({
      adress: "Rua santa ernestina",
      CEP: "14820000",
      city: "americo",
      email: "guiorlandin@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "43984862237",
      role: "ADMIN",
      state: "SP",
    });

    await expect(() =>
      sut.execute({
        adress: "Rua santa ernestina",
        CEP: "14820000",
        city: "americo",
        email: "guiorlandin@gmail.com",
        name: "Guilherme",
        password: "123456",
        phone: "43984862237",
        state: "SP",
        role: "ADMIN",
      })
    ).rejects.toBeInstanceOf(OrgAlreadyExistsError);
  });
});
