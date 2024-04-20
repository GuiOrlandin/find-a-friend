# APP

Este projeto foi desenvolvido com o objetivo de criar uma plataforma para facilitar a adoção de animais. O frontend foi construído utilizando React.js, ReactQuery e TypeScript, proporcionando uma experiência de usuário fluída. Já o backend foi desenvolvido com Node.js, utilizando o framework Fastify para construir APIs eficientes e escaláveis. O banco de dados PostgreSQL é gerenciado pelo Prisma, garantindo um acesso rápido e seguro aos dados.

# 🛠 Tecnologias utilizadas

React.js

ReactQuery

TypeScript

docker

Prisma

postgresql

fastify

Node.js

### RFs (Requisitos funcionais)

- [x] Deve ser possível cadastrar um pet
- [x] Deve ser possível listar todos os pets disponíveis para adoção em uma cidade
- [x] Deve ser possível filtrar pets por suas características
- [x] Deve ser possível visualizar detalhes de um pet para adoção
- [x] Deve ser possível se cadastrar como uma ORG
- [x] Deve ser possível realizar login como uma ORG

### RNs (Regras de negócio)

- [x] Para listar os pets, obrigatoriamente precisamos informar a cidade
- [x] Uma ORG precisa ter um endereço e um número de WhatsApp
- [x] Um pet deve estar ligado a uma ORG
- [x] O usuário que quer adotar, entrará em contato com a ORG via WhatsApp
- [x] Todos os filtros, além da cidade, são opcionais
- [x] Para uma ORG acessar a aplicação como admin, ela precisa estar logada

### RNFs (Requisitos não funcionais)

- [x] A senha do usuário precisa estar criptografada;
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgresSQL;
- [x] A Org deve ser identificado por um JWT (JSON web Token);

### Clonando o repositório

```sh
gh repo clone GuiOrlandin/find-a-friend
```

### Instale as dependências

```sh
npm i
```

```sh
yarn
```

### Execute o docker compose

```sh
docker compose up
```

### Execute o docker e rode as migrations

```sh
docker start
```

```sh
npx prisma migrate dev

```

### Navegue até os diretórios do projeto

```sh
cd api
```

```sh
cd web
```

### Inicie a aplicação na parte Front-end

```sh
npm run dev
```

```sh
yarn dev
```

### Inicie a aplicação na parte back-end

```sh
npm run start:dev
```

```sh
yarn start:dev
```
