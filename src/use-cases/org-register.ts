import { OrgsRepository } from "@/repositories/org-repository";
import { OrgAlreadyExistsError } from "./errors/org-already-exists";
import { Org } from "@prisma/client";
import { hash } from "bcryptjs";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
  adress: string;
  city: string;
  phone:string;
  CEP: string;
}

interface RegisterUseCaseResponse {
  org: Org;
}

export class OrgRegisterUseCase {
  constructor(private usersRepository: OrgsRepository) {}

  async execute({
    adress,city,email,name,password,phone,CEP
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const password_hash = await hash(password, 6);

    const orgWithSameEmail = await this.usersRepository.findByEmail(email);

    if (orgWithSameEmail) {
      throw new OrgAlreadyExistsError();
    }
    const org = await this.usersRepository.create({
     adress,city,email,name,password_hash,phone,CEP
    });

    return {
      org,
    };
  }
}
