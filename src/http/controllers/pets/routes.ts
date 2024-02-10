import { FastifyInstance } from "fastify";
import { petRegister } from "./pet-register";
import { verifyJWT } from "../middleware/verify-jwt";
import { findPet } from "./find-pet";
import { uploadImages } from "../middleware/upload-images";

const upload = uploadImages();

export async function petsRoutes(app: FastifyInstance) {
  app.post(
    "/pets",
    { onRequest: [verifyJWT], preHandler: upload.array("petImage", 4) },
    petRegister
  );
  app.get("/pets/available", findPet);
}
