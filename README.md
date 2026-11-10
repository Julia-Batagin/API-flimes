# 🎬 API de Filmes

## Sobre o projeto

Este projeto consiste no desenvolvimento de uma API REST de gerenciamento de filmes, criada utilizando Node.js e MongoDB.

A API permite realizar operações de cadastro, consulta, atualização e exclusão de filmes, armazenando todas as informações em um banco de dados MongoDB.

O projeto foi desenvolvido como atividade prática com o objetivo de colocar em prática os conhecimentos sobre desenvolvimento de APIs, integração com banco de dados não relacional e utilização de métodos HTTP.

## Objetivos

- Desenvolver uma API utilizando Node.js.
- Trabalhar com o framework Express.
- Realizar a conexão com um banco de dados MongoDB.
- Implementar operações CRUD.
- Testar as rotas utilizando o Thunder Client.
- Publicar o projeto no GitHub.
- Realizar o deploy da aplicação no Render.

## Tecnologias utilizadas

- **Node.js:** ambiente de execução utilizado para desenvolver a aplicação.
- **Express:** biblioteca utilizada para criar o servidor e organizar as rotas da API.
- **MongoDB:** banco de dados não relacional utilizado para armazenar as informações dos filmes.
- **MongoDB Atlas:** serviço utilizado para hospedar o banco de dados na nuvem.
- **Thunder Client:** ferramenta utilizada para testar as requisições HTTP.
- **Dotenv:** biblioteca utilizada para carregar variáveis de ambiente.
- **Git e GitHub:** utilizados para versionamento e publicação do código.

## Estrutura dos dados

Cada filme cadastrado possui as seguintes informações:

| Campo | Descrição |
|---|---|
| titulo | Nome do filme |
| diretor | Nome do diretor |
| genero | Gênero cinematográfico |
| ano | Ano de lançamento |


## Rotas da API

A API possui cinco operações principais:

| Método HTTP | Rota | Funcionalidade |
|---|---|---|
| GET | `/` | Verificar se a API está funcionando |
| POST | `/filmes` | Cadastrar um novo filme |
| GET | `/filmes` | Listar todos os filmes |
| GET | `/filmes/:id` | Buscar um filme pelo ID |
| PUT | `/filmes/:id` | Atualizar as informações de um filme |
| DELETE | `/filmes/:id` | Excluir um filme |

**2. Listar filmes — GET**

Endpoint: `/filmes`

Retorna todos os filmes cadastrados no banco de dados.

**3. Buscar filme por ID — GET**

Endpoint: `/filmes/:id`

Permite localizar um filme específico utilizando seu identificador no MongoDB.

**4. Atualizar filme — PUT**

Endpoint: `/filmes/:id`

Permite modificar as informações de um filme já cadastrado.

**5. Excluir filme — DELETE**

Endpoint: `/filmes/:id`

Remove um filme do banco de dados utilizando seu identificador.

## Como executar o projeto localmente

### 1. Pré-requisitos

Antes de começar, é necessário ter instalado:

- Node.js
- npm
- Git
- Uma conta no MongoDB Atlas

### 2. Clonar o repositório

```bash
git clone https://github.com/Julia-Batagin/API-flimes.git
```

Entre na pasta do projeto:

```bash
cd API-produtos
```

### 3. Instalar as dependências

```bash
npm install
```

### 4. Configurar as variáveis de ambiente

Crie um arquivo chamado `.env` na pasta principal do projeto e configure:

```env
MONGO_URI=sua_string_de_conexao
PORT=3000
```

Substitua `sua_string_de_conexao` pela URL de conexão fornecida pelo MongoDB Atlas.

**Importante:** o arquivo `.env` não deve ser publicado no GitHub, pois contém informações privadas de conexão com o banco de dados.

### 5. Iniciar o servidor

Execute no terminal:

```bash
node server.js
```

Se tudo estiver configurado corretamente, aparecerá:

```text
Servidor funcionando na porta 3000!
```

A API poderá ser acessada localmente pelo endereço:

`http://localhost:3000`

## Testes da API

As rotas foram testadas utilizando o Thunder Client, uma extensão do Visual Studio Code que permite realizar requisições HTTP.

Foram realizados testes de:

- Cadastro de filmes.
- Listagem dos filmes cadastrados.
- Busca de filmes pelo ID.
- Atualização de informações.
- Exclusão de filmes.

Os testes permitiram verificar o funcionamento das operações CRUD e a comunicação entre a aplicação Node.js e o banco de dados MongoDB.

## Segurança

O projeto utiliza variáveis de ambiente por meio do Dotenv para proteger informações de conexão com o banco de dados.

O arquivo `.env` e a pasta `node_modules` são ignorados pelo Git por meio do `.gitignore`, evitando o envio de informações privadas e arquivos desnecessários ao repositório.

## Deploy

O deploy da aplicação será realizado utilizando a plataforma Render, permitindo disponibilizar a API na internet e acessar suas rotas por meio de uma URL pública.

**URL da API:** será adicionada após a conclusão do deploy.

## Considerações finais

O desenvolvimento deste projeto proporcionou a oportunidade de praticar conceitos importantes de programação, principalmente a criação de APIs REST, a utilização de métodos HTTP e a integração com bancos de dados não relacionais.

Além disso, a atividade permitiu conhecer melhor ferramentas utilizadas no desenvolvimento de aplicações, como Thunder Client, GitHub, MongoDB Atlas e Render.

O resultado é uma API funcional de gerenciamento de filmes, que permite realizar as principais operações de manipulação de dados.

---

**Projeto desenvolvido como atividade prática de Node.js e MongoDB.**

## Link do Deploy
https://api-flimes.onrender.com
