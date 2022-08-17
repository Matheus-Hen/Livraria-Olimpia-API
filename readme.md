<h1 align="center">Livraria Olimpia - API</h1>

[![Generic badge](https://img.shields.io/badge/Status-Em_Andamento-yellow.svg)](https://shields.io/)

![capaolimpiaapi](https://user-images.githubusercontent.com/83258570/182043643-85058033-482e-49d3-9e27-2617b702d698.jpg)


## Pessoas Desenvolvedoras do Projeto:
<table>
  <tr>
    <td align="center">
      <a href="https://www.linkedin.com/in/lisandradecassia/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102766893?v=4" width="100px;"><br>
        <sub>
        <b>Lisandra Silva</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/andre-sqr/">
        <img style="border-radius: 50%; width="100px;"" src="https://avatars.githubusercontent.com/u/102765824?v=4" width="100px;"><br>
        <sub>
        <b>André Siqueira</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/matheus-henrique-de-l%C3%A1zaro-silva/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/44203985?v=4" width="100px;"><br>
        <sub>
        <b>Matheus Henrique</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/ester-messias-08b706177/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87023023?v=4" width="100px;"><br>
        <sub>
        <b>Ester Messias</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/wellisonsales/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/83258570?v=4" width="100px;"><br>
        <sub>
        <b>Wellison Sales</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.linkedin.com/in/nuchoa/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/97313973?v=4" width="100px;"><br>
        <sub>
        <b>Nathalia Uchoa</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
</table>

---

## Tecnologias utilizadas:

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

## O projeto:

A **"OlimpiaAPI"** é um sistema de gerenciamento de livrarias e pode ser utilizada para armazenador dados de livros, fornecedores, pagamentos, clientes, bem como estoque para gerenciamento de entrada e saída de produtos. Para armazenamento dos dados, a OlimpiaAPI utiliza o Sqlite3 a qual possui infraestrutura para receber cerca de 128TB de dados.

## Pré-requisitos:

- Node.js (v.16.15.1)
- NPM (v.8.11.0)

## Pacotes:

- Express (4.18.1)
- sqlite3 (v5.0.10)
- Nodemon (v2.0.19)

### Instalação:

Para utilizar este projeto de código aberto, é necessário fazer um `git clone` em sua máquina para ter acesso ao ambiente de desenvolvimento. Lembre-se de conferir se você possui instalado o `Node.js` e o gereciador de arquivos `NPM` nas versões citadas em `pré-requisitos`.

No terminal da sua máquina, digite `git clone` + o link do repositório desta API:

```
git clone https://github.com/Matheus-Hen/Livraria-Olimpia-API
```

Acessando a pasta:

```
cd Livraria-Olimpia-API
```

Instalandos os pacotes:

```
npm install
```

Rodando o projeto:

```
npm start
```

### Reinicialização do banco de dados:

Se caso deseja reiniciar por algum motivo o banco, utilize o comando abaixo no terminal após os passos anteriores.

```
npm run db
```

# Rotas

### Clientes

- **GET /clientes**

  _Confere os clientes registrados no banco de dados_

Esquema de Requisição:

> http://localhost:3000/clientes

Esquema de resposta:

  ```json
    {
        "clientes": [
            {
                "id": 1,
                "nome": "Adriano Silva",
                "email": "adrianosilva@gmail.com",
                "cpf": "24456634405",
                "telefone": "6435380744",
                "senha": "adrianinho123",
                "cep": "61948530"
            },
            {
                "id": 2,
                "nome": "Olivia Rogéria",
                "email": "good4u@yahoo.com",
                "cpf": "48576088207",
                "telefone": "8721148532",
                "senha": "traitor",
                "cep": "59025100"
            },
            {
                "id": 3,
                "nome": "Taylor Swift",
                "email": "folkloreaoty@gmail.com",
                "cpf": "44727894181",
                "telefone": "9928763448",
                "senha": "amomeusgatinhos",
                "cep": "69304410"
            },
            {
                "id": 4,
                "nome": "Pera Pereira",
                "email": "perapereira@yahoo.com",
                "cpf": "01243297050",
                "telefone": "8325412343",
                "senha": "pear123",
                "cep": "79002914"
            },
            {
                "id": 5,
                "nome": "Kanye West",
                "email": "uniaokanyetaylor@gmail.com",
                "cpf": "99421990803",
                "telefone": "7937575524",
                "senha": "thecollegedropout",
                "cep": "65057807"
            }
        ],
        "erro": false
    }
  ```

---

- **GET /clientes/nome/:nome**

  _Busca um cliente no banco de dados pelo nome_

Requisição
  
  > http://localhost:3000/clientes/nome/Taylor Swift

Esquema de resposta:

  ```json
    {
    "cliente": {
      "id": 3,
      "nome": "Taylor Swift",
      "email": "taylorcontato@gmail.com",
      "cpf": "44727894181",
      "telefone": "9928763448",
      "senha": "amomeusgatinhos",
      "cep": "69304410"
    },
    "erro": false
  }
  ```

---

- **GET /clientes/cpf/:cpf**

  _Busca um cliente no banco de dados pelo CPF_

Requisição:

  > http://localhost:3000/clientes/cpf/48576088207

Esquema de resposta:

  ```json
    {
        "cliente": {
            "id": 2,
            "nome": "Olivia Rogéria",
            "email": "good4u@yahoo.com",
            "cpf": "48576088207",
            "telefone": "8721148532",
            "senha": "traitor",
            "cep": "59025100"
        },
        "erro": false
    }
  
  ```

---

- **GET /clientes/email/:email**

  _Busca um cliente no banco de dados pelo email_

Requisição:

> http://localhost:3000/clientes/email/perapereira@yahoo.com


Esquema de resposta:

  ```json
    {
        "cliente": {
            "id": 4,
            "nome": "Pera Pereira",
            "email": "perapereira@yahoo.com",
            "cpf": "01243297050",
            "telefone": "8325412343",
            "senha": "pear123",
            "cep": "79002914"
        },
        "erro": false
    }
  ```

---

- **GET /clientes/id/:id**

  _Busca um cliente no banco de dados pelo ID_

Requisição:
> http://localhost:3000/clientes/id/4

Esquema de resposta:

  ```json
    {
        "cliente": {
            "id": 4,
            "nome": "Pera Pereira",
            "email": "perapereira@yahoo.com",
            "cpf": "01243297050",
            "telefone": "8325412343",
            "senha": "pear123",
            "cep": "79002914"
        },
        "erro": false
    }
  ```

---

- **POST /clientes**

  _Criar um novo cliente e insere no banco de dados_


Esquema de requisição:

> http://localhost:3000/clientes/

```json
{
        "nome": "Junim",
        "email": "devcontato@gmail.com",
        "cpf": "50258909856",
        "telefone": "9953578491",
        "senha": "umasenhalegal",
        "cep": "05890600"
      }

 ```
 

Esquema de resposta:

  ```json
  {
    "msg": "o cliente foi inserido com sucesso"
  }
  ```

---

- **PUT /clientes/id/:id**

  _Atualiza um ou múltiplos dados de um cliente desejado_

  Esquema da requisição:

  > http://localhost:3000/clientes/id/5

  ```json
  
  {
      "nome": "Kanye West da Silva",
      "email": "uniaokanycontato@gmail.com",
      "cpf": "99421990803",
      "telefone": "7937575524",
      "senha": "thecollegedropout",
      "cep": "65057807"
  } 


  ```

Esquema de resposta:

```json
{  
  "msg": "Cliente atualizado com sucesso",
  "clientes": [
    {
			"id": 5,
			"nome": "Kanye West da Silva",
			"email": "uniaokanycontato@gmail.com",
			"cpf": "99421990803",
			"telefone": "7937575524",
			"senha": "thecollegedropout",
			"cep": "65057807"
    }
  ]
}
```

---

- **DELETE /clientes/id/:id**

  _Realiza uma deleção no banco de dados do cliente com o ID requerido_

  Esquema de requisição: 

> http://localhost:3000/clientes/id/3

  Esquema de resposta:

  ```json
{
    "msg": "Cliente deletado com sucesso",
    "erro": false
}
  ```

---

### Estoque

- **GET /estoque**

_Acessando os produtos cadastrados no estoque_

Esquema de requisição:

> http://localhost:3000/estoque

Esquema de resposta:

```json
{
    "produtos": [
        {
            "idEstoque": 101,
            "produto": "Livro um",
            "quantidade": 202,
            "fornecedor": "Editora Insitrica"
        },
        {
            "idEstoque": 102,
            "produto": "Livro dois",
            "quantidade": 502,
            "fornecedor": "Catavento"
        },
        {
            "idEstoque": 103,
            "produto": "Livro tres",
            "quantidade": 102,
            "fornecedor": "Porta de Trás"
        },
        {
            "idEstoque": 104,
            "produto": "Livro quatro",
            "quantidade": 303,
            "fornecedor": "Editora Devinho"
        },
        {
            "idEstoque": 105,
            "produto": "Livro cincto",
            "quantidade": 507,
            "fornecedor": "Editora Perry"
        }
    ],
    "erro": false
}
```

---

- **POST /estoque**

_Inserindo novos produtos em estoque_

Esquema de requisição:

> http://localhost:3000/estoque

```json
    {
      "produto": "Diário de Um Banana",
      "quantidade": 457,
      "fornecedor": "Florinda Livros LTDA"
    }
```

Esquema de resposta:

```json
{
    "msg": "Um novo produto foi inserido com sucesso",
    "estoque": {
        "produto": "Diário de Um Banana",
        "quantidade": 457,
        "fornecedor": "Florinda Livros LTDA"
    },
    "erro": false
}
```

Ao adicionar um produto ao estoque, o sistema colocará um id automáticamente.

---

- **GET /estoque/id**

  _Buscando um produto pelo ID no sistema_

  Adicione o número do id que está buscando. Neste exemplo, usaremos o id 106 que foi cadastrado no passo anterior :

Esquema de requisição:

  > http://localhost:3000/estoque/id/101

Esquema de resposta:

  ```json
{
    "produtos": {
        "idEstoque": 101,
        "produto": "Livro um",
        "quantidade": 202,
        "fornecedor": "Editora Insitrica"
    },
    "erro": false
}
  ```
---

- **PUT /estoque/id/:id**

  _Atualizando o produto do estoque_


Esquema de requisição:

  > http://localhost:3000/estoque/id/101

  ```json
{

            "produto": "Livro um",
            "quantidade": 202,
            "fornecedor": "Editora Resilia"
        }
  ```

Esquema de resposta:

  ```json
{
    "msg": "Produto atualizado com êxito",
    "produto": {
        "produto": "Livro um",
        "quantidade": 202,
        "fornecedor": "Editora Resilia"
    },
    "erro": false
}
  ```

---

- **DELETE /estoque/id/:id**

  _Removendo um produto do estoque_

Esquema de requisição:

> http://localhost:3000/estoque/id/101

  ```json

{
"produto": "Livro um",
"quantidade": 202,
"fornecedor": "Editora Insitrica"
}

  ```

Esquema de resposta:

```json
{
    "msg": "O produto foi removido do estoque",
    "erro": false
}
```

---

### Pagamentos

- **GET /pagamentos**

  _Confere os pagamentos registrados no banco de dados_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/

  Esquema de resposta:

  ```json
  {
      "pagamentos": [
          {
              "idPagamentos": 2022,
              "cliente": "luana silva de alencar",
              "formaDePagamento": "pix",
              "valor": 120,
              "parcelamento": "0",
              "status": "pago",
              "data": "20-08-2022"
          },
          {
              "idPagamentos": 2023,
              "cliente": "pedro josé Barros",
              "formaDePagamento": "cartao",
              "valor": 89,
              "parcelamento": "2",
              "status": "pago",
              "data": "15-08-2022"
          },
          {
              "idPagamentos": 2024,
              "cliente": "marcos santos",
              "formaDePagamento": "boleto",
              "valor": 180,
              "parcelamento": "1",
              "status": "pago",
              "data": "02-08-2022"
          },
          {
              "idPagamentos": 2025,
              "cliente": "amanda tainá Rosa",
              "formaDePagamento": "pix",
              "valor": 59,
              "parcelamento": "0",
              "status": "pago",
              "data": "17-06-2022"
          },
          {
              "idPagamentos": 2026,
              "cliente": "ana Julia maria",
              "formaDePagamento": "cartao",
              "valor": 59,
              "parcelamento": "0",
              "status": "pago",
              "data": "17-06-2022"
          }
      ],
      "erro": false
  }
  ```

---

- **GET /pagamentos/idPagamentos/:idPagamentos**

  _Busca pagamento no banco de dados pelo id_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/idPagamentos/2023

  Esquema de resposta:

  ```json
  {
      "pagamentos": [
          {
              "idPagamentos": 2023,
              "cliente": "pedro josé Barros",
              "formaDePagamento": "cartao",
              "valor": 89,
              "parcelamento": "2",
              "status": "pago",
              "data": "15-08-2022"
          }
      ],
      "erro": false
  }
  ```

---

- **GET /pagamentos/status/status**

  _Busca um pagamento no banco de dados pelo status_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/status/pago

  Esquema de resposta:

  ```json
  {
      "pagamentos": [
          {
              "idPagamentos": 2022,
              "cliente": "luana silva de alencar",
              "formaDePagamento": "pix",
              "valor": 120,
              "parcelamento": "0",
              "status": "pago",
              "data": "20-08-2022"
          },
          {
              "idPagamentos": 2023,
              "cliente": "pedro josé Barros",
              "formaDePagamento": "cartao",
              "valor": 89,
              "parcelamento": "2",
              "status": "pago",
              "data": "15-08-2022"
          },
          {
              "idPagamentos": 2024,
              "cliente": "marcos santos",
              "formaDePagamento": "boleto",
              "valor": 180,
              "parcelamento": "1",
              "status": "pago",
              "data": "02-08-2022"
          },
          {
              "idPagamentos": 2025,
              "cliente": "amanda tainá Rosa",
              "formaDePagamento": "pix",
              "valor": 59,
              "parcelamento": "0",
              "status": "pago",
              "data": "17-06-2022"
          },
          {
              "idPagamentos": 2026,
              "cliente": "ana Julia maria",
              "formaDePagamento": "cartao",
              "valor": 59,
              "parcelamento": "0",
              "status": "pago",
              "data": "17-06-2022"
          }
      ],
      "erro": false
  }
  ```

---

- **GET /pagamentos/data/:data**

  _Busca o pagamento no banco de dados pela data_

  Requisição:

  > http://localhost:3000/pagamentos/data/20-08-2022/

  ```json
  {
      "pagamentos": [
          {
              "idPagamentos": 2022,
              "cliente": "luana silva de alencar",
              "formaDePagamento": "pix",
              "valor": 120,
              "parcelamento": "0",
              "status": "pago",
              "data": "20-08-2022"
          }
      ],
      "erro": false
  }
  ```

---

- **GET /pagamentos/valor/:valor**

  _Busca o pagamento no banco de dados pelo valor_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/valor/180

  ```json
  {
    "pagamentos": [
      {
        "idPagamentos": 2024,
        "cliente": "marcos santos",
        "formaDePagamento": "boleto",
        "valor": 180,
        "parcelamento": "1",
        "status": "pago",
        "data": "02-08-2022",
        "idLivros": null
      }
    ]
  }
  ```

---

- **GET /pagamentos/parcelamento/:parcelamento**

  _Busca o pagamento no banco de dados pela quantidade de parcelas_

  Esquema de requisição:
  > http://localhost:3000/pagamentos/parcelamento/2

  Esquema de resposta:

  ```json
  {
    "pagamentos": [
      {
        "idPagamentos": 2023,
        "cliente": "pedro josé Barros",
        "formaDePagamento": "cartao",
        "valor": 89,
        "parcelamento": "2",
        "status": "pago",
        "data": "15-08-2022",
        "idLivros": null
      }
    ]
  }
  ```

- **GET /pagamentos/cliente/:cliente**

  _Busca o pagamento no banco de dados pelo nome do cliente_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/parcelamento/marcos santos

  Esquema de requisição:

  ```json
  {
    "pagamentos": [
      {
        "idPagamentos": 2024,
        "cliente": "marcos santos",
        "formaDePagamento": "boleto",
        "valor": 180,
        "parcelamento": "1",
        "status": "pago",
        "data": "02-08-2022",
        "idLivros": null
      }
    ]
  }
  ```

---

- **GET /pagamentos/formaDePagamento/:formaDePagamento**

  _Busca pagamento pelo meio de pagamento selecionado_

  Esquema de requisição:

  > http://localhost:3000/pagamentos/formaDePagamento/pix

  Esquema de resposta:

  ```json
  {
      "pagamentos": [
          {
              "idPagamentos": 2022,
              "cliente": "luana silva de alencar",
              "formaDePagamento": "pix",
              "valor": 120,
              "parcelamento": "0",
              "status": "pago",
              "data": "20-08-2022"
          },
          {
              "idPagamentos": 2025,
              "cliente": "amanda tainá Rosa",
              "formaDePagamento": "pix",
              "valor": 59,
              "parcelamento": "0",
              "status": "pago",
              "data": "17-06-2022"
          }
      ],
      "erro": false
  }
  ```

---

  ***

- **POST /pagamentos**

  _Cria um novo pagamento e insere no banco de dados_


  Esquema de requisição:

  > http://localhost:3000/pagamentos

  ```json
  {
  "cliente": "Ana Ana",
    "formaDePagamento": "dinheiro",
    "valor": 290,
    "parcelamento": "2",
    "status": "pendente",
    "data": "20-08-2021",
    "idLivros": null
  }
  ```

  Esquema de resposta:

  ```json
  {
    "msg": "Pagamento inserido com sucesso",
    "pagamentos": {
      "cliente": 2089,
      "formaDePagamento": "Ana Ana",
      "valor": "dinheiro",
      "parcelamento": 290,
      "status": "2",
      "data": "pendente"
    }
  }
  ```
---
- **DELETE /pagamentos/idPagamentos/:id**

  _Realiza uma deleção no banco de dados do pagamento com o id requerido_

  Esquema de requisição

  > http://localhost:3000/pagamentos/idPagamentos/2022

  Esquema de resposta:

  ```json
  {
    "msg": "Pagamento deletado com sucesso",
    "erro": false
  }
  ```
---
- **PUT /pagamentos/idPagamentos/:idPagamentos**

  _Atualiza um ou múltiplos dados de um pagamento desejado_

  Esquema da requisição:

  > http://localhost:3000/pagamentos/idPagamentos/2023

  ```json
    {
          "cliente": "pedro josé Barros",
          "formaDePagamento": "cartao",
          "valor": 150,
          "parcelamento": "2",
          "status": "pago",
          "data": "15-08-2022"
      }
  ```

Esquema de resposta:

```json
{
    "msg": "Pagamento atualizado com sucesso",
    "cliente": {
        "cliente": "pedro josé Barros",
        "formaDePagamento": "cartao",
        "valor": 150,
        "status": "pago",
        "parcelamento": "2",
        "data": "15-08-2022"
    },
    "erro": false
}
```

---
---

### Fornecedores

- **GET /fornecedores**

  _Confere os fornecedores registrados no banco de dados_

  > http://localhost:3000/fornecedores

  ```json
  {
    "fornecedores": [
      {
        "id": 1,
        "nome": "PAPERSHIFT",
        "cnpj": "03546726000111",
        "produto": "Artigos de Papelaria",
        "email": "compras@papershift.com.br",
        "telefone": "55 19 23768254",
        "endereco": "Avenida Barcelona, 1405 - Agua Branca, Campinas - SP",
        "cep": "03945080"
      }
    ]
  }
  ```

---

- **GET / fornecedores/id/:id**

  _Busca um fornecedor no banco de dados pelo id_

  Esquema de requisição:

  http://localhost:3000/pagamentos/id/2

  Esquema de resposta:

  ```json
  {
    "fornecedores": [
      {
        "id": 2,
        "nome": "A Página",
        "cnpj": "01795809000110",
        "produto": "Livros",
        "email": "compras@apagina.com.br",
        "telefone": "55 41 32135643",
        "endereco": "Rua Major Fabriciano do Rego Barros, 1050 - Hauer, Curitiba - PR",
        "cep": "01830260"
      }
    ]
  }
  ```

---

- **GET /fornecedores/cnpj/:cnpj**

  _Busca um fornecedor no banco de dados pelo cnpj_

  Esquema de requisição:

  http://localhost:3000/fornecedores/cnpj/03546726000111

  Esquema de resposta:

  ```json
  {
    "fornecedores": [
      {
        "id": 1,
        "nome": "PAPERSHIFT",
        "cnpj": "03546726000111",
        "produto": "Artigos de Papelaria",
        "email": "compras@papershift.com.br",
        "telefone": "55 19 23768254",
        "endereco": "Avenida Barcelona, 1405 - Agua Branca, Campinas - SP",
        "cep": "03945080"
      }
    ]
  }
  ```

---

- **GET /fornecedores/produto/:produto**

  _Busca fornecedores pelo tipo de produto_

  Esquema de requisição:

  http://localhost:3000/fornecedores/produto/Livros

  Esquema de resposta:

  ```json
  {
    "fornecedores": [
        {
            "id": 2,
            "nome": "A Página",
            "cnpj": "01795809000110",
            "produto": "Livros",
            "email": "compras@apagina.com.br",
            "telefone": "55 41 32135643",
            "endereco": "Rua Major Fabriciano do Rego Barros, 1050 - Hauer, Curitiba - PR",
            "cep": "01830260"
        },
  ]
  }
  ```

---

- **GET /fornecedores/endereco/:cep**

  _Busca fornecedores por cep_

  Esquema de requisição:

  http://localhost:3000/fornecedores/endereco/04985570

  Esquema de Resposta:

  ```json
  {
    "fornecedores": [
      {
        "id": 5,
        "nome": "Bookstan",
        "cnpj": "01746378240110",
        "produto": "Livros",
        "email": "compras@bookstan.com.br",
        "telefone": "55 98 88748278",
        "endereco": "Rua Graciliano Ramos, 400 - Assis, São Luís - MA",
        "cep": "04985570"
      }
    ]
  }
  ```

---

- **POST /fornecedores**

  _Cria um novo fornecedor e insere no banco de dados_

  Esquema  de requisição:

  http://localhost:3000/fornecedores/

  ```json
  {
    "nome": "livroteca",
    "cnpj": "01746378240133",
    "produto": "Tudo",
    "email": "tudo@bookstan.com.br",
    "telefone": "55 98 88748278",
    "endereco": "Rua Graciliano Ramos, 1 - Assis, São Luís - MA",
    "cep": "04985519"
  }
  ```

  Esquema de resposta:

  ```json
  {
    "msg": "Fornecedor inserido",
    "id": 366,
    "nome": "livroteca",
    "cnpj": "01746378240133",
    "produto": "Tudo",
    "email": "tudo@bookstan.com.br",
    "telefone": "55 98 88748278",
    "endereco": "Rua Graciliano Ramos, 1 - Assis, São Luís - MA",
    "cep": "04985519"
  }
  ```

---

- **DELETE /fornecedores/id/:id**

  _Realiza uma deleção no banco de dados do fornecedor com o id requerido_

  Esquema de requisição:

  > http://localhost:3000/fornecedores/id/1

  Esquema de resposta:

  ```json
  {
    "msg": "Fornecedor deletado",
    "erro": false
  }
  ```

---

- **PUT /fornecedores/id/:id**

  _Atualização de dados do fornecedor por id_

  Esquema de requisição:

  > http://localhost:3000/fornecedores/id/23

  Atualizando os dados:

 ```json
{
   "nome": "Vendotudo",
   "cnpj": "01746378242222",
   "produto": "Tudo",
   "email": "tudo@bookstan.com.br",
   "telefone": "55 98 88748278",
   "endereco": "Rua Graciliano Ramos, 1 - Assis, São Luís - MA",
   "cep": "04985579"
   }
```

Esquema de resposta:

```json
{
  "msg": "Fornecedor atualizado",
  "fornecedor": {
      "nome": "Vendotudo",
      "cnpj": "01746378242222",
      "produto": "Tudo",
      "email": "tudo@bookstan.com.br",
      "telefone": "55 98 88748278",
      "endereco": "Rua Graciliano Ramos, 1 - Assis, São Luís - MA",
      "cep": "04985579"
  },
}
```
---

### Funcionários

- **GET /funcionario**

  _Confere os funcionários registrados no banco de dados_

  Esquema de requisição;

    > http://localhost:3000/funcionario

  Esquema de resposta:

  ```json
  {
            "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100",
            "cargo": "CEO"
  }
  ```

---
- **GET /funcionario/nome/:nome**

  _Procurando um funcionário pelo nome cadastrado no sistema_

  > http://localhost:3000/funcionario/nome/Marcos Henrique

  Esquema de resposta:

  ```json
        {
            "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100",
            "cargo": "CEO"
        }
  ```

---
**GET /funcionario/cpf/:cpf**

  _Procurando um funcionário pelo cpf cadastrado no sistema_

  > http://localhost:3000/funcionario/cpf/14458658405

  Esquema de resposta:

  ```json
        {
            "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100",
            "cargo": "CEO"
        }, 
  ```

---
**GET /funcionario/email/:email**

  _Procurando um funcionário pelo email cadastrado no sistema_

  Esquema de requisição:

  > http://localhost:3000/funcionario/email/marquinho@gmail.com

  Esquema de resposta:

  ```json
        {
            "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100",
            "cargo": "CEO"
        }, 
  ```
---
**GET /funcionario/id/:id**

  _Procurando um funcionário pelo id cadastrado no sistema_

  Esquema de requisição:

    > http://localhost:3000/funcionario/id/1

  Esquema de resposta:

  ```json
        {
             "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100"
        }
  ```
---
**POST /funcionario**

  _Adicionando funcionário sistema_

  Esquema de adição de funcionário:

    > http://localhost:3000/funcionario/

  ```json
  { 
        "nome": "Junim",
        "email": "juni.@gmail.com",
        "cpf": "14454548405",
        "telefone": "3736954712",
        "senha": "zmaruinho100",
        "cargo": "Desenvolvedor Junior"
    }
  ```
  Esquema de resposta:

  ```json
{
    "msg": "Funcionario inserido com sucesso",
    "funcionario": {
        "nome": "Junim",
        "email": "junim.@gmail.com",
        "cpf": "14454548405",
        "telefone": "3736954712",
        "cargo": "Desenvolvedor Junior",
        "senha": "zmaruinho100"
    },
    "erro": false
}
  ```
---
**DELETE /funcionario/id/:id**

  _Deleta funcionário do sistema por id_

  Esquema de requisição:

  http://localhost:3000/funcionario/id/1

  Esquema de deleção:

  ```json
    {
        "msg": "Funcionario deletado com sucesso",
        "erro": false
    }
  ```

---

- **PUT /funcionario/id/:id**

  _Atualiza um ou múltiplos dados de um funcionário desejado_

  Esquema da requisição:

  >http://localhost:3000/funcionario/id/1

  ```json
  {
      "id": 1,
      "nome": "Marcos Henrique",
      "email": "marquinho@gmail.com",
      "cpf": "14458658405",
      "telefone": "12345678",
      "senha": "zmarquinho100",
      "cargo": "CEO"
  } 
  ```

Esquema de resposta:

```json
	  {
	    "msg": "Funcionario atualizado com sucesso",
	    "cliente": {
	    "nome": "Marcos Henrique",
	    "email": "marquinho@gmail.com",
	    "cpf": "14458658405",
	    "telefone": "12345678",
	    "cargo": "CEO",
	    "senha": "zmarquinho100"
	  }
	    
    }
 ```
	
---
### Livros

- **GET /livros**

_Acessando a lista de livros cadastrados no estoque_

Exemplo de requisição:

> http://localhost:3000/livros

Esquema de resposta:

```json
{
    "livros": [
        {
            "idLivro": 100001,
            "titulo": "O Pequeno Principe",
            "autor": "Antoine de Saint Exupéry",
            "genero": "Literatura Infanto juvenil",
            "formato": "Físico",
            "valor": 20,
            "idioma": "Português",
            "numeroPaginas": 96
        }
    ]
    },
```
---

**GET /livros/titulo/:titulo**

  _Busca livros no banco de dados pelo titulo_

  Exemplo de requisição:

  > http://localhost:3000/livros/titulo/O Pequeno Principe
  

  Esquema de resposta:


```json
{
    "titulo": {
        "idLivro": 100001,
        "titulo": "O Pequeno Principe",
        "autor": "Antoine de Saint Exupéry",
        "genero": "Literatura Infanto juvenil",
        "formato": "Físico",
        "valor": 20,
        "idioma": "Português",
        "numeroPaginas": 96
    },
    "erro": false
}
```
---

**GET /livros/idLivro/:idLivro**

  _Busca livro no banco de dados pelo ID (100001 a 100011)_

  Exemplo de requisição:

  > http://localhost:3000/livros/idLivro/100004

  Esquema de resposta:


```json
{
    "titulo": {
        "idLivro": 100004,
        "titulo": "As Brumas de Avalon",
        "autor": "Marion Zimmer Bradley",
        "genero": "Romance",
        "formato": "Físico",
        "valor": 42,
        "idioma": "Português",
        "numeroPaginas": 320
    },
    "erro": false
}
```
---
**GET /livros/genero/:genero**

  _Busca livro no banco de dados pelo genero (Romance, Ficção Científica, Literatura)_

  Exemplo de requisição:

  > http://localhost:3000/livros/genero/Romance
  

  Esquema de resposta:


```json
{
    "titulo": [
        {
            "idLivro": 100004,
            "titulo": "As Brumas de Avalon",
            "autor": "Marion Zimmer Bradley",
            "genero": "Romance",
            "formato": "Físico",
            "valor": 42,
            "idioma": "Português",
            "numeroPaginas": 320
        },
    ]
```
---
**GET /livros/autor/:autor**

  _Busca livro no banco de dados pelo autor_

  Exemplo de requisição:

  > http://localhost:3000/livros/autor/Carl Sagan 

  Esquema de resposta:


```json
{
    "titulo": [
        {
            "idLivro": 100006,
            "titulo": "Contact",
            "autor": "Carl Sagan",
            "genero": "Romance",
            "formato": "Físico",
            "valor": 35,
            "idioma": "Inglês",
            "numeroPaginas": 432
        }
    ],
}
```
---
**GET /livros/idioma/:idioma**

  _Busca livro no banco de dados pelo idioma (Alemão, Inglês, Português)_

  Exemplo de requisição:

  > http://localhost:3000/livros/idioma/Alemão

  Esquema de resposta:


```json

{
    "titulo": [
        {
            "idLivro": 100010,
            "titulo": "The Book Thief",
            "autor": "Markus Zusak",
            "genero": "Romance",
            "formato": "Físico",
            "valor": 45,
            "idioma": "Alemão",
            "numeroPaginas": 480
        }
    ],
    "erro": false
}
```
---
**DELETE /livros/idLivro/:idLivro**

  _Realiza uma deleção no banco de dados de livros com o id requerido_

  
  Exemplo de requisição:

  > http://localhost:3000/livros/idLivro/100009

  Esquema de resposta:

```json

{
    "msg": "Livro deletado com sucesso",
    "erro": false
}
```
---
**PUT /livros/:idLivro**

  _Atualiza um ou múltiplos dados de um livro desejado_

  Exemplo de requisição:

  > http://localhost:3000/livros/idLivro/100010

```json

  {
          "titulo": "O Milagre do Amanhã",
          "autor": "Hal Elrod",
          "genero": "Autoajuda",
          "formato": "Físico",
          "valor": 80,
          "idioma": "Português",
          "numeroPaginas": 196
      }
  ```

  Esquema de resposta:

```json

{
    "msg": "O livro foi atualizado com sucesso",
    "livro": {
        "titulo": "The Miracle Morning",
        "autor": "Hal Elrod",
        "genero": "Autoajuda",
        "formato": "Físico",
        "valor": 60,
        "idioma": "Inglês",
        "numeroPaginas": 196
    },
}
```
**POST /livros**

  _Cria um novo livro e insere no banco de dados_

  Esquema de requisição:

  > http://localhost:3000/livros

  Esquema de requisição de livros:

  ```json
       {
            "titulo": "ciranda cirandinha vamos",
            "autor": "Antoine de Saint Exupéry",
            "genero": "Literatura Infanto juvenil",
            "formato": "Físico",
            "valor": 20,
            "idioma": "Português",
            "numeroPaginas": 96
        }
  ```
  Esquema de resposta:

  ```json
     {
        "msg": "Cadastro do livro realizado com sucesso",
        "livro": {
        "titulo": "ciranda cirandinha vamos",
        "autor": "Antoine de Saint Exupéry",
        "genero": "Literatura Infanto juvenil",
        "formato": "Físico",
        "valor": 20,
        "idioma": "Português",
        "numeroPaginas": 96
    },
    }
  ```
---
## Licença:

Copyright © 2022 - OlimpiaAPI

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste arquivo, com restrição de publicar como seu repositório. Porém, sem restrição nos direitos de usar, copiar, modificar e mesclar.

---

## Colaboração:

Para colaborar com esse projeto, clique em `fork` e envie sua colaboração em issues.
