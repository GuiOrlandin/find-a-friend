import { FastifyInstance } from "fastify";
import { orgRegister } from "./org-register";
import { orgAuthenticate } from "./org-authenticate";
import { refresh } from "./refresh";
import { orgInfo } from "./org-info";
import { verifyJWT } from "../middleware/verify-jwt";

export async function orgsRoutes(app: FastifyInstance) {
  app.post("/orgs", orgRegister);
  app.get("/orgInfo", { onRequest: [verifyJWT] }, orgInfo);
  app.post("/authenticate", orgAuthenticate);
  app.patch("/token/refresh", refresh);
}
