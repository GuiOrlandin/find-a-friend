import { Prisma, Org } from "@prisma/client";
import { randomUUID } from "crypto";
import { OrgsRepository } from "../org-repository";

export class InMemoryOrgsRepository implements OrgsRepository {
  public items: Org[] = [];

  async findById(id: string) {
    const org = this.items.find((item) => item.id === id);

    if (!org) {
      return null;
    }

    return org;
  }
  async findByEmail(email: string) {
    const org = this.items.find((item) => item.email === email);

    if (!org) {
      return null;
    }

    return org;
  }

  async create(data: Prisma.OrgCreateInput) {
    const org = {
      id: randomUUID(),
      email: data.email,
      name: data.name,
      password_hash: data.password_hash,
      adress: data.adress,
      city: data.city,
      phone: data.phone,
      CEP: data.CEP,
      created_at: new Date(),
      role: data.role!,
      state: data.state,
    };

    this.items.push(org);

    return org;
  }
}
