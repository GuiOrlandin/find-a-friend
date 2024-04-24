import { makeFindPetByCityUseCase } from "@/use-cases/factories/make-find-pets-by-city";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findPetByCity(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const findPetBodySchema = z.object({
    city: z.string().optional(),
    id: z.string().optional(),
    page: z.coerce.number().optional(),
  });

  const { city, page, id } = findPetBodySchema.parse(request.query);

  const findPetUseCase = makeFindPetByCityUseCase();

  if (city) {
    const { pets } = await findPetUseCase.execute({
      city,
      page,
    });

    return reply.status(200).send({
      pets,
    });
  }

  if (id) {
    const { pets } = await findPetUseCase.execute({
      id,
    });

    return reply.status(200).send({
      pets,
    });
  }
}
