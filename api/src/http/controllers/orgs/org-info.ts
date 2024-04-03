import { makeOrgInfoUseCase } from "@/use-cases/factories/make-org-info";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function orgInfo(request: FastifyRequest, reply: FastifyReply) {
  const orgInfoBodySchema = z.object({
    email: z.string().email(),
  });

  const { email } = orgInfoBodySchema.parse(request.query);

  console.log(email);

  const orgInfoUseCase = makeOrgInfoUseCase();

  const { org } = await orgInfoUseCase.execute({
    email,
  });

  console.log(org);

  return reply.status(200).send({
    org,
  });
}
