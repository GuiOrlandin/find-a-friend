import { FastifyInstance } from "fastify";
import { petRegister } from "./pet-register";
import { verifyJWT } from "../middleware/verify-jwt";
import { findPet } from "./find-pet";

export async function petsRoutes(app: FastifyInstance) {
  app.addHook("onRequest", verifyJWT);

  app.post("/pets", petRegister);
  app.get("/pets/available", findPet);
}
