<h1 align="center">Livraria Olimpia - API</h1>

[![Generic badge](https://img.shields.io/badge/Status-Em_Andamento-yellow.svg)](https://shields.io/)

![capaolimpiaapi](https://user-images.githubusercontent.com/83258570/182043643-85058033-482e-49d3-9e27-2617b702d698.jpg)

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

Por padrão, o banco de dados da OlimpiaAPI possui dados populados de forma simulada e está representado como `olimpia.db` nos arquivos do projeto. Dessa forma, você pode realizar consultas de rotas sem a necessidade de inicializar o banco. Mas, se caso deseja reiniciar por algum motivo o banco, utilize o comando abaixo no terminal após os passos anteriores.

```
npm run db
```

# Rotas

### Clientes

- **GET /clientes**

  _Confere os clientes registrados no banco de dados_

  Esquema de resposta:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

---

- **GET /clientes/nome/:nome**

  _Busca um cliente no banco de dados pelo nome_

  Esquema de resposta:

  ```json
  {
   "clientes": [
       {
           "idEstoque": 101,
           "produto": "Código  Limpo",
           "quantidade": 457,
           "fornecedor": "Editora Alta Books"
       }
   }
  ```

---

- **GET /clientes/cpf/:cpf**

  _Busca um cliente no banco de dados pelo CPF_

  Esquema de resposta:

  ```json
  {
    "idEstoque": 101,
    "produto": "Código Limpo",
    "quantidade": 457,
    "fornecedor": "Editora Alta Books"
  }
  ```

---

- **GET /clientes/email/:email**

  _Busca um cliente no banco de dados pelo email_

  Esquema de resposta:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

  ```

  ```

---

- **GET /clientes/id/:id**

  _Busca um cliente no banco de dados pelo ID_

  Esquema de resposta:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

---

- **POST /clientes**

  _Cria um novo cliente e insere no banco de dados_

  Esquema da requisição:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

  Esquema de resposta:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

---

- **PUT /clientes**

  _Atualiza um ou múltiplos dados de um cliente desejado_

  Esquema da requisição:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

Esquema de resposta:

```json
 {
  "clientes": [
      {
          "idEstoque": 101,
          "produto": "Código  Limpo",
          "quantidade": 457,
          "fornecedor": "Editora Alta Books"
      }
  }
```

---

- **DELETE /clientes/id/:id**

  _Realiza uma deleção no banco de dados do cliente com o ID requerido_

  Esquema de resposta:

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }
  ```

---

### Estoque

- **GET /estoque**

_Acessando os produtos cadastrados no estoque_

Esquema de resposta:

```json
 {
  "clientes": [
      {
          "idEstoque": 101,
          "produto": "Código  Limpo",
          "quantidade": 457,
          "fornecedor": "Editora Alta Books"
      }
  }
```

---

- **POST /estoque**

_Inserindo novos produtos em estoque_

Esquema de inserção de um novo produto:

```json
 {
  "clientes": [
      {
          "idEstoque": 101,
          "produto": "Código  Limpo",
          "quantidade": 457,
          "fornecedor": "Editora Alta Books"
      }
  }
```

Ao adicionar um produto ao estoque, o sistema colocará um id automáticamente.

Esquema de resposta de um produto inserido :

```json
 {
  "clientes": [
      {
          "idEstoque": 101,
          "produto": "Código  Limpo",
          "quantidade": 457,
          "fornecedor": "Editora Alta Books"
      }
  }
```

---

- **GET /estoque/id**

  _Buscando um produto pelo ID no sistema_

  Adicione o número do id que está buscando. Neste exemplo, usaremos o id 106 que foi cadastrado no passo anterior :

  > http://localhost:3000/estoque/id/106

  Como resposta, você receberá este esquema :

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }

  ```

---

- **DELETE /estoque**

  _Removendo um produto do estoque_

  Adicione no corpo da mensagem o produto que deseja remover :

  ```json
   {
    "clientes": [
        {
            "idEstoque": 101,
            "produto": "Código  Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    }

  ```

Como resposta, você receberá este esquema :

```json
 {
  "clientes": [
      {
          "idEstoque": 101,
          "produto": "Código  Limpo",
          "quantidade": 457,
          "fornecedor": "Editora Alta Books"
      }
  }

```

---

### Pagamentos

- **GET /pagamentos**

  _Confere os pagamentos registrados no banco de dados_

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
            "data": "20-08-2022",
            "idLivros": null
        }
  ],

  ```

---

- **GET /pagamentos/idPagamentos/:idPagamentos**

  _Busca um pagamento no banco de dados pelo id_

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

---

- **GET /pagamentos/status/status**

  _Busca um pagamento no banco de dados pelo id_

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
            "data": "20-08-2022",
            "idLivros": null
        }
  ],
  ```

---

- **GET /pagamentos/data/:data**

  _Busca o pagamento no banco de dados pela data_

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
    ],

  ```

---

- **GET /pagamentos/valor/:valor**

  _Buscao pagamento no banco de dados pelo valor_

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
    ],
  ```

---

- **GET /pagamentos/parcelamento/:parcelamento**

  _Busca o pagamento no banco de dados pela quantidade de parcelas_

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
    ],
  ```

- **GET /pagamentos/cliente/:cliente**

  _Busca o pagamento no banco de dados pela quantidade de parcelas_

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
    ],
  ```

---

- **GET /pagamentos/formaDePagamento/:formaDePagamento**

  _Busca pagamento pelo meio de pagamento selecionado_

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
          "data": "20-08-2022",
          "idLivros": null
      },
  ```

---

- **GET /pagamentos/**

  _Cria um novo pagamento e insere no banco de dados_

  ```json
  {
    "idPagamentos": 2089,
    "cliente": "Ana Ana",
    "formaDePagamento": "dinheiro",
    "valor": 290,
    "parcelamento": "2",
    "status": "pendente",
    "data": "20-08-2021",
    "idLivros": null
  }
  ```

  ***

- **GET /pagamentos/**

  _Cria um novo pagamento e insere no banco de dados_

  ```json
  {
    "idPagamentos": 2089,
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
    },

  ```

## Pessoas Desenvolvedoras do Projeto:

---

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

## Licença:

Copyright © 2022 - OlimpiaAPI

A permissão é concedida, gratuitamente, a qualquer pessoa que obtenha uma cópia deste arquivo, com restrição de publicar como seu repositório. Porém, sem restrição nos direitos de usar, copiar, modificar e mesclar.

---

## Colaboração:

Para colaborar com esse projeto, clique em `fork` e envie sua colaboração em issues.
