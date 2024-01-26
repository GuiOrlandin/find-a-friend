import { FastifyInstance } from "fastify";
import { orgRegister } from "./org-register";


export async function orgsRoutes(app: FastifyInstance) {
  app.post("/orgs", orgRegister);

}
