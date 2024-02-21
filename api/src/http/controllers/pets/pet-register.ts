import { makePetRegisterUseCase } from "@/use-cases/factories/make-pet-register";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function petRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const PetImage = z.array(
    z.object({
      url: z.string(),
    })
  );

  const registerBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    description: z.string().array(),
    age: z.enum(["FILHOTE", "ADULTO"]),
    energyLevel: z.string(),
    animalSize: z.enum(["PEQUENO", "MEDIO", "GRANDE"]),
    animalType: z.enum(["Gato", "Cachorro"]),
    levelOfIndependence: z.enum(["BAIXO", "MEDIO", "ALTO"]),
    enviroment: z.enum(["PEQUENO", "MEDIO", "GRANDE"]),
    petImage: PetImage,
    requirement: z.string(),
  });

  const {
    name,
    animalSize,
    energyLevel,
    city,
    age,
    description,
    enviroment,
    animalType,
    levelOfIndependence,
    requirement,
    petImage,
  } = registerBodySchema.parse(request.body);
  console.log(request.files);

  const petRegisterUseCase = makePetRegisterUseCase();

  await petRegisterUseCase.execute({
    name,
    animalSize,
    energyLevel,
    city,
    age,
    description,
    enviroment,
    animalType,
    levelOfIndependence,
    requirement,
    petImage,
    org_id: request.user.sub,
  });

  return reply.status(201).send();
}
