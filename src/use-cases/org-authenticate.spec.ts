import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryOrgsRepository } from "../repositories/in-memory/in-memory-org-respository";
import { OrgAuthenticateUseCase } from "./org-authenticate";
import { hash } from "bcryptjs";
import { InvalidCredentialsError } from "./errors/invalid-credentials-error";

let orgsRepository: InMemoryOrgsRepository;
let sut: OrgAuthenticateUseCase;

describe("OrgAuthenticate Use Case ", () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository();
    sut = new OrgAuthenticateUseCase(orgsRepository);
  });
  it("it should  be able to authenticate a org", async () => {
    await orgsRepository.create({
      adress: "Rua santa ernestina",
      CEP: "14820000",
      city: "americo",
      email: "guiorlandin@gmail.com",
      name: "Guilherme",
      password_hash: await hash("123456", 6),
      phone: "43984862237",
    });

    const { org } = await sut.execute({
      email: "guiorlandin@gmail.com",
      password: "123456",
    });

    expect(org.id).toEqual(expect.any(String));
  });

  it("it should not be able to authenticate a org with wrong password", async () => {
    await expect(
      sut.execute({
        email: "guiorlandin@gmail.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });

  it("it should not be able to authenticate a org with wrong email", async () => {
    await expect(
      sut.execute({
        email: "guiorlandini@gmail.com",
        password: "123456",
      })
    ).rejects.toBeInstanceOf(InvalidCredentialsError);
  });
});
