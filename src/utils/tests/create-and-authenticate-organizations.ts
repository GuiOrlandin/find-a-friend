import request from "supertest";
import { hash } from "bcryptjs";
import { FastifyInstance } from "fastify";

import { prisma } from "@/lib/prisma";

export async function createAndAuthenticateOrganization(app: FastifyInstance) {
  await prisma.org.create({
    data: {
      adress: "Rua do meio",
      CEP: "182024000",
      city: "americo",
      email: "test@gmail.com",
      name: "Guilherme",
      password_hash: await hash("123456", 6),
      phone: "168849405",
    },
  });

  const authResponse = await request(app.server).post("/authenticate").send({
    email: "test@gmail.com",
    password: "123456",
  });

  const { token } = authResponse.body;

  return { token };
}
