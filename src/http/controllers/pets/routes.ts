import { FastifyInstance } from "fastify";
import { petRegister } from "./pet-register";
import { verifyJWT } from "../middleware/verify-jwt";

export async function petsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.post("/pets", petRegister);
}
