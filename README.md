# **API GENERATION**

## Projeto desenvolvido como avaliação técnica para Lead na Generation

### Descrição

**A ideia seria construir uma aplicação(API) que consiste em uma manipulação de cadastro de maneira automatizada para participantes em um curso.** 

**O desafio consiste em efetuar as operações do CRUD (Create, Read, Update e Delete) e tratar uma regra de negocio relacionada a data para executar oque foi proposto executei com as seguinte ferramentas:** 

- **[NestJS](https://docs.nestjs.com),** 
- **[typeORM](https://docs.nestjs.com/techniques/database)**
- **[express](https://docs.nestjs.com)**

**A API consiste em um monolito MVC (Model, View e Controller) os componentes que acompanham essa arquitetura:** 


![](https://i.imgur.com/AJ1FO03.png)


#### Recursos da model:

+ **ID**

+ **Nome**

+ **Data de Nascimento**

+ **Data de Cadastro**

+ **Período do Curso**

+ **Tipo do Curso**

  

#### Recursos do Controller:

- **@Get()**

- **@Get('Participante/:id')**

-  **@Post()**

- **@Put()**

-  **@Delete('Participante/:id')**

  

### Para executar essa aplicação você deverá seguir o seguintes passos:

1. **Criar um novo banco de dados local (Mysql) com o nome 'test'**
2. **Acessar o app.module dentro da raiz do projeto e mudar a informações de acordo com seu banco de dados (ex: user: root, password: root)** 
3. **Instalar as bibliotecas a partir do gerenciador de pacotes de sua preferencia (ex: 'npm i' )**
4. **Utilize o 'http://localhost:3000/api/' para acessar a API através do Swagger**
5. **Iniciar o projeto através do 'npm run start' e utilizar a api 😜**



