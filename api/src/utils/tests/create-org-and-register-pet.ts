import request from "supertest";
import { FastifyInstance } from "fastify";

import { createAndAuthenticateOrganization } from "./create-and-authenticate-organizations";

export async function createOrgAndRegisterPet(app: FastifyInstance) {
  const { token } = await createAndAuthenticateOrganization(app);

  const petRegister = await request(app.server)
    .post(`/pets`)
    .set("Authorization", `Bearer ${token}`)
    .send({
      name: "Jule",
      city: "Americo",
      description: " Cachorro de porte grande e dócio",
      age: "ADULTO",
      energyLevel: "03",
      animalSize: "GRANDE",
      levelOfIndependence: "BAIXO",
      enviroment: "GRANDE",
      requirement:
        "Dar bastante atenção para o animal e não deixa-lo muito tempo sozinho",
    });

  const { pet } = petRegister.body;

  return { pet };
}
