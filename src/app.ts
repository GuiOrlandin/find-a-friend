import fastify from "fastify";
import { orgsRoutes } from "./http/controllers/orgs/routes";
import { ZodError } from "zod";
import { env } from "./env";


export const app = fastify()

app.register(orgsRoutes)


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