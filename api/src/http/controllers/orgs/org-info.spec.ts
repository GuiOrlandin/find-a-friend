import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";

describe("Org info (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to show org information", async () => {
    await request(app.server).post("/orgs").send({
      adress: "Rua do meio",
      CEP: "182024000",
      city: "americo",
      email: "test@gmail.com",
      name: "Guilherme",
      password: "123456",
      phone: "168849405",
    });

    const response = await request(app.server)
      .get("/orgInfo")
      .query({
        email: "test@gmail.com",
      })
      .send();

    console.log(response.body.org);

    expect(response.statusCode).toEqual(200);
    expect(response.body.org.email).toEqual("test@gmail.com");
  });
});
