import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { app } from "../../../app";
import request from "supertest";
import { createOrgAndRegisterPet } from "@/utils/tests/create-org-and-register-pet";
import { createAndAuthenticateOrganization } from "@/utils/tests/create-and-authenticate-organizations";
import { prisma } from "@/lib/prisma";

describe("Find a pet (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to find a pet", async () => {
    const { token } = await createAndAuthenticateOrganization(app);

    const pet = await request(app.server)
      .post(`/pets`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Jule",
        city: "Americo",
        description: [" Cachorro de porte grande e dócio"],
        age: "ADULTO",
        energyLevel: "03",
        animalSize: "GRANDE",
        levelOfIndependence: "BAIXO",
        enviroment: "GRANDE",
        requirement:
          "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
        petImage: [{ url: "url_da_imagem_1" }, { url: "url_da_imagem_2" }],
      });

    const response = await request(app.server)
      .get("/pets/available")
      .query({
        animalSize: "GRANDE",
        energyLevel: "03",
        city: "Americo",
        age: "ADULTO",
        levelOfIndependence: "BAIXO",
        page: "1",
      })
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.pets).toHaveLength(1);
    expect(response.body.pets).toEqual([
      expect.objectContaining({
        city: "Americo",
      }),
    ]);
  });
});
