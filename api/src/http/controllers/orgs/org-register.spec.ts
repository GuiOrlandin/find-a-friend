import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("Org Register (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to register a org", async () => {
    const response = await request(app.server).post("/orgs").send({
      adress: "Rua do meio",
      CEP: "182024000",
      city: "americo",
      email: "test@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "168849405",
      state: "SP",
    });

    expect(response.statusCode).toEqual(201);
  });
});
