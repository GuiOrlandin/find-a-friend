import { OrgAlreadyExistsError } from "@/use-cases/errors/org-already-exists";
import { makePetRegisterUseCase } from "@/use-cases/factories/make-pet-register";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function petRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    city: z.string(),
    description: z.string(),
    age: z.enum(["FILHOTE", "ADULTO"]),
    energyLevel: z.string(),
    animalSize: z.enum(["PEQUENO", "MEDIO", "GRANDE"]),
    levelOfIndependence: z.enum(["BAIXO", "MEDIO", "ALTO"]),
    enviroment: z.enum(["PEQUENO", "MEDIO", "GRANDE"]),
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
    levelOfIndependence,
    requirement,
  } = registerBodySchema.parse(request.body);

  const petRegisterUseCase = makePetRegisterUseCase();

  try {
    await petRegisterUseCase.execute({
      name,
      animalSize,
      energyLevel,
      city,
      age,
      description,
      enviroment,
      levelOfIndependence,
      requirement,
      org_id: request.user.sub,
    });
  } catch (err) {
    if (err instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    return reply.status(500).send();
  }

  return reply.status(201).send();
}
