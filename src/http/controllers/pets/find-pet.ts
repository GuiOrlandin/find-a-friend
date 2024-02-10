import { makeFindPetUseCase } from "@/use-cases/factories/make-find-peth";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findPet(request: FastifyRequest, reply: FastifyReply) {
  const findPetBodySchema = z.object({
    city: z.string(),
    age: z.enum(["FILHOTE", "ADULTO"]),
    energyLevel: z.string(),
    animalSize: z.enum(["PEQUENO", "MEDIO", "GRANDE"]),
    levelOfIndependence: z.enum(["BAIXO", "MEDIO", "ALTO"]),
    page: z.coerce.number(),
  });

  const { animalSize, energyLevel, city, age, levelOfIndependence, page } =
    findPetBodySchema.parse(request.query);

  const findPetUseCase = makeFindPetUseCase();

  const { pets } = await findPetUseCase.execute({
    animalSize,
    energyLevel,
    city,
    age,
    levelOfIndependence,
    page,
  });

  return reply.status(200).send({
    pets,
  });
}
