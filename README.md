# APP

app para adoção de animais.

# 🛠 Tecnologias utilizadas

TypeScript

docker

Prisma

postgresql

fastify

Node.js

### RFs (Requisitos funcionais)

- [X] Deve ser possível cadastrar um pet
- [] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [] Deve ser possível filtrar pets por suas características
- [] Deve ser possível visualizar detalhes de um pet para adoção
- [X] Deve ser possível se cadastrar como uma ORG
- [X] Deve ser possível realizar login como uma ORG

### RNs (Regras de negócio)

- [X] Para listar os pets, obrigatoriamente precisamos informar a cidade
- [X] Uma ORG precisa ter um endereço e um número de WhatsApp
- [X] Um pet deve estar ligado a uma ORG
- [] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- [x] Todos os filtros, além da cidade, são opcionais
- [] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

### RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [x] A Org deve ser identificado por um JWT (JSON web Token);
