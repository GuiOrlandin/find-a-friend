import { beforeEach, describe, expect, it } from "vitest";
import { InMemoryOrgsRepository } from "../repositories/in-memory/in-memory-org-respository";
import { hash } from "bcryptjs";
import { OrgInfoUseCase } from "./org-info";

let orgsRepository: InMemoryOrgsRepository;
let sut: OrgInfoUseCase;

describe("Org Info Use Case ", () => {
  beforeEach(() => {
    orgsRepository = new InMemoryOrgsRepository();
    sut = new OrgInfoUseCase(orgsRepository);
  });
  it("it should  be able search about an org", async () => {
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
    });

    expect(org.email).toEqual("guiorlandin@gmail.com");
  });
});
