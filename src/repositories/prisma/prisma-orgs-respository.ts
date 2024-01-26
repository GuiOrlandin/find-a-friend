import { Prisma } from "@prisma/client";
import { OrgsRepository } from "../org-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrgsRepository implements OrgsRepository {
  async findById(id: string) {
    const user = await prisma.org.findFirst({
      where: {
        id,
      },
    });

    return user;
  }
  async findByEmail(email: string) {
    const user = await prisma.org.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
  async create(data: Prisma.OrgCreateInput) {
    const user = await prisma.org.create({
      data,
    });

    return user;
  }
}
