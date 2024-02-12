import { OrgsRepository } from "@/repositories/org-repository";
import { OrgAlreadyExistsError } from "./errors/org-already-exists";
import { Org, Role } from "@prisma/client";
import { hash } from "bcryptjs";

interface OrgRegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
  adress: string;
  city: string;
  phone: string;
  CEP: string;
  role: Role;
}

interface OrgRegisterUseCaseResponse {
  org: Org;
}

export class OrgRegisterUseCase {
  constructor(private orgsRepository: OrgsRepository) {}

  async execute({
    adress,
    city,
    email,
    name,
    password,
    phone,
    CEP,
    role,
  }: OrgRegisterUseCaseRequest): Promise<OrgRegisterUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const orgWithSameEmail = await this.orgsRepository.findByEmail(email);

    if (orgWithSameEmail) {
      throw new OrgAlreadyExistsError();
    }
    const org = await this.orgsRepository.create({
      adress,
      city,
      email,
      name,
      password_hash,
      phone,
      CEP,
      role,
    });

    return {
      org,
    };
  }
}
