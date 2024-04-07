import { afterAll, beforeAll, describe, expect, it } from "vitest";
import request from "supertest";
import { app } from "../../../app";
import { createAndAuthenticateOrganization } from "@/utils/tests/create-and-authenticate-organizations";

describe("Org info (e2e)", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to show org information", async () => {
    const { token } = await createAndAuthenticateOrganization(app);

    const response = await request(app.server)
      .get("/orgInfo")
      .set("Authorization", `Bearer ${token}`)
      .query({
        email: "test@gmail.com",
      })
      .send();

    expect(response.statusCode).toEqual(200);
    expect(response.body.email).toEqual("test@gmail.com");
  });
});
