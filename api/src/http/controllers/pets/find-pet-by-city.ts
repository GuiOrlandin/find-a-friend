import { makeFindPetByCityUseCase } from "@/use-cases/factories/make-find-pets-by-city";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findPetByCity(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findPetBodySchema = z.object({
    city: z.string(),
    page: z.coerce.number(),
  });

  const { city, page } = findPetBodySchema.parse(request.query);

  const findPetUseCase = makeFindPetByCityUseCase();

  const { pets } = await findPetUseCase.execute({
    city,
    page,
  });

  return reply.status(200).send({
    pets,
  });
}
