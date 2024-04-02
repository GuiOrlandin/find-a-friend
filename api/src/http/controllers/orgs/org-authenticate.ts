import { InvalidCredentialsError } from "@/use-cases/errors/invalid-credentials-error";
import { makeOrgAuthenticateUseCase } from "@/use-cases/factories/make-org-authenticate";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function orgAuthenticate(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const orgAuthenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = orgAuthenticateBodySchema.parse(request.body);

  try {
    const orgAuthenticateUseCase = makeOrgAuthenticateUseCase();

    const { org } = await orgAuthenticateUseCase.execute({
      email,
      password,
    });

    const token = await reply.jwtSign(
      {
        role: org.role,
      },
      {
        sign: {
          sub: org.id,
        },
      }
    );

    const refreshToken = await reply.jwtSign(
      {
        role: org.role,
      },
      {
        sign: {
          sub: org.id,
          expiresIn: "7d",
        },
      }
    );

    return reply
      .setCookie("refreshToken", refreshToken, {
        path: "/",
        secure: true,
        sameSite: true,
        httpOnly: true,
      })
      .status(200)
      .send({ token });
  } catch (err) {
    if (err instanceof InvalidCredentialsError) {
      return reply.status(409).send({ message: err.message });
    }

    return reply.status(500).send();
  }
}
