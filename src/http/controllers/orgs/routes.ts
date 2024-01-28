import { FastifyInstance } from "fastify";
import { orgRegister } from "./org-register";
import { orgAuthenticate } from "./org-authenticate";
import { refresh } from "./refresh";

export async function orgsRoutes(app: FastifyInstance) {
  app.post("/orgs", orgRegister);
  app.post("/authenticate", orgAuthenticate);
  app.patch("/token/refresh", refresh);
}
