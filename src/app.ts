import fastify from "fastify";
import { orgsRoutes } from "./http/controllers/orgs/routes";
import { ZodError } from "zod";
import { env } from "./env";
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import { petsRoutes } from "./http/controllers/pets/routes";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  cookie: {
    cookieName: "refreshToken",
    signed: false,
  },
  sign: {
    expiresIn: "10m",
  },
});

app.register(fastifyCookie);

app.register(orgsRoutes);
app.register(petsRoutes);

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: "Validation erro.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  } else {
    //log to external tool like datadog/newrelic/sentry
  }

  return reply.status(500).send({ message: "Internal server error." });
});
