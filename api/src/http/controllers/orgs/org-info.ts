import { makeOrgInfoUseCase } from "@/use-cases/factories/make-org-info";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function orgInfo(request: FastifyRequest, reply: FastifyReply) {
  const orgInfoBodySchema = z.object({
    email: z.string().email().optional(),
    id: z.string().optional(),
  });

  const { email, id } = orgInfoBodySchema.parse(request.query);

  const orgInfoUseCase = makeOrgInfoUseCase();

  if (email) {
    const { org } = await orgInfoUseCase.execute({
      email,
    });

    return reply.status(200).send({
      ...org,
      password_hash: undefined,
      role: undefined,
    });
  }
  if (id) {
    const { org } = await orgInfoUseCase.execute({
      id,
    });

    return reply.status(200).send({
      ...org,
      password_hash: undefined,
      role: undefined,
    });
  }
}
