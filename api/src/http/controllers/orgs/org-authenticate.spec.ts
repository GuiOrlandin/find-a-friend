import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("Org authenticate (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to authenticate a org", async () => {
    await request(app.server).post("/orgs").send({
      adress: "Rua do meio",
      CEP: "182024000",
      city: "americo",
      email: "test@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "168849405",
    });

    const response = await request(app.server).post("/authenticate").send({
      email: "test@gmail.com",
      password: "123456",
    });

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      token: expect.any(String),
    });
  });
});
