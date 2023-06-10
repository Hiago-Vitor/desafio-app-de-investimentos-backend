# Challenge Xp Inc. backend

API basica para um aplicativo de investimentos em ações com algumas funções de conta digital.

## Sobre o Projeto

Neste projeto foi desenvolvido uma API com as seguintes funcionalidades:

#### Quando autenticado o cliente pode:

- Comprar e vender ações
- Depositar e sacar o dinheiro da conta
- Acessar ações compradas
- Acessar saldo pessoal
- Acessar ações disponiveis para compra

## Como executar o projeto:

<details>
  <summary><strong>logo abaixo 🐳</strong></summary><br />

Para instalar e executar localmente a API você deve ter o [Git](https://gist.github.com/derhuerst/1b15ff4652a867391f03) e o [Docker](https://docs.docker.com/install/) instalados e configurados.
Utilizando o terminal, faça o clone do projeto:

```
git clone git@github.com:Hiago-Vitor/desafio-app-de-investimentos-backend.git

cd desafio-app-de-investimentos-backend
```

É necessario renomear o arquivo `.env.example` para `.env`:

- não é necessario alterar as variaveis
- o projeto roda nas portas 3000 para o Node e 3306 para o MySQL

Use o Docker para carregar e depois disponibilizar todos os serviços necessários ao funcionamento:

```
npm run docker
```

Instalando as dependencias do projeto, iniciando o banco de dados e rodando a aplicação

```
npm i && npm run create && npm run seed && npm run dev
```

Para restaurar o banco execute:

```
npm run drop && npm run create && npm run seed && npm run dev
```

Para executar os testes:

```
npm run test:mocha
```

</details><br />

<details>
  <summary><strong>Como fazer login na aplicação:</strong></summary><br />
  
  ### Para acessar a aplicação, seja localmente ou pelo deploy a aplicação conta com dois usuarios ja cadastrados com as seguintes credenciais:

- ### User: teste
- email: `test@test.com`
- password: `password`
<br>
<br>

- ### User: teste-2
- email: `other@test.com`
- password: `password2`


</details>
<br>
<details>
  <summary><strong>⚠️ Swagger ⚠️</strong></summary><br />

 - A documentação do swagger encontra-se incompleta porem esta mapeando todas as rotas na rota `localhost:3000/api-docs`

</details>
<br>
<details>
  <summary><strong>Tomadas de Decisão</strong></summary><br>

### Visando qualidade, segurança e confiabilidade, algumas mudanças foram feitas nos endpoints requeridos pelo desafio, como:

- Criação do endpoin `/login` para autenticação do cliente com as bibliotecas JWT e bcrypt

- Alteração nas requisiçoes que pediam o id do cliente, agora a informação é lida pelo dado contido no token criado no login.

Fiz essas alterações pois antes o usuario poderia comprar ativos, realizar deposistos, saques e consultas de dados de outros clientes.

### Em função do tempo, no caso da documentação no Swagger não estar pronta ate a entrega do desafio preparei duas colections para mapear os endpoits:

É necessario possuir o [Insomnia](https://insomnia.rest/download) ou o [Postman](https://www.postman.com/downloads/) instalados, para utilizar uma das collections que estão na raiz do projeto.

</details>

## Considerações Finais

Este projeto continua em desenvolvimeto e novas funcionalidades serão adicionadas após a finalização do processo seletivo, como: cadastro de novos clientes, edição de infos pessoais, alteração de senha, etc.
Qualquer duvida ou sugestao por favor abra uma issue [Aqui](https://github.com/Hiago-Vitor/desafio-app-de-investimentos-backend/issues) e muito obrigado.
