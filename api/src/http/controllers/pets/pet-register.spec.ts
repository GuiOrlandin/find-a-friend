import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";
import { createAndAuthenticateOrganization } from "@/utils/tests/create-and-authenticate-organizations";

describe("Pet Register (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to register a pet", async () => {
    const { token } = await createAndAuthenticateOrganization(app);

    const response = await request(app.server)
      .post(`/pets`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        name: "Jule",
        city: "Aco",
        description: " Cachorro de porte grande e dócio",
        age: "ADULTO",
        energyLevel: "03",
        animalSize: "GRANDE",
        levelOfIndependence: "BAIXO",
        enviroment: "GRANDE",
        animalType: "Gato",
        requirement: [
          "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
          "Dar bastante atenção para o animal",
        ],
        petImage: [{ path: "url_da_imagem_1" }, { path: "url_da_imagem_2" }],
      });

    expect(response.statusCode).toEqual(201);
  });
});
