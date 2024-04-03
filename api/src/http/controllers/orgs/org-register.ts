import { OrgAlreadyExistsError } from "@/use-cases/errors/org-already-exists";
import { makeOrgRegisterUseCase } from "@/use-cases/factories/make-org-register-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function orgRegister(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerBodySchema = z.object({
    name: z.string(),
    adress: z.string(),
    CEP: z.string(),
    city: z.string(),
    phone: z.string().min(9),
    role: z.enum(["ADMIN", "USER"]).default("ADMIN"),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, name, password, adress, CEP, city, phone, role } =
    registerBodySchema.parse(request.body);

  try {
    const registerUseCase = makeOrgRegisterUseCase();

    await registerUseCase.execute({
      adress,
      CEP,
      city,
      email,
      name,
      password,
      phone,
      role,
    });
  } catch (err) {
    if (err instanceof OrgAlreadyExistsError) {
      return reply.status(409).send({ message: err.message });
    }

    return reply.status(500).send();
  }

  return reply.status(201).send();
}
