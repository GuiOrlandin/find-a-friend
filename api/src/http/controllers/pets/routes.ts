import { FastifyInstance } from "fastify";
import { petRegister } from "./pet-register";
import { verifyJWT } from "../middleware/verify-jwt";
import { findPetByCharacteristics } from "./find-pet-by-characteristics";
import { uploadImages } from "../middleware/upload-images";
import { findPetByCity } from "./find-pet-by-city";

const upload = uploadImages();

export async function petsRoutes(app: FastifyInstance) {
  app.post(
    "/pets",
    { onRequest: [verifyJWT], preHandler: upload.array("petImage", 4) },
    petRegister
  );
  app.get("/pets/available/characteristics", findPetByCharacteristics);
  app.get("/pets/available/city", findPetByCity);
}
