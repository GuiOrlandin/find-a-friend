import { makeOrgInfoUseCase } from "@/use-cases/factories/make-org-info";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function orgInfo(request: FastifyRequest, reply: FastifyReply) {
  const orgInfoBodySchema = z.object({
    email: z.string().email(),
  });

  const { email } = orgInfoBodySchema.parse(request.query);

  const orgInfoUseCase = makeOrgInfoUseCase();

  const { org } = await orgInfoUseCase.execute({
    email,
  });

  return reply.status(200).send({
    ...org,
    password_hash: undefined,
    role: undefined,
  });
}
