import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("refresh token (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to refresh a token", async () => {
    await request(app.server).post("/orgs").send({
      adress: "Rua do meio",
      CEP: "182024000",
      city: "americo",
      email: "test@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "168849405",
    });

    const authResponse = await request(app.server).post("/authenticate").send({
      email: "test@gmail.com",
      password: "123456",
    });

    const cookie = authResponse.get("Set-Cookie");

    const response = await request(app.server)
      .patch("/token/refresh")
      .set("Cookie", cookie)
      .send();
    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual({
      token: expect.any(String),
    });
    expect(response.get("Set-Cookie")).toEqual([
      expect.stringContaining("refreshToken="),
    ]);
  });
});
