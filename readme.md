<h1 align="center">Livraria Olimpia - API</h1>

[![Generic badge](https://img.shields.io/badge/Status-Em_Andamento-yellow.svg)](https://shields.io/)

![capaolimpiaapi](https://user-images.githubusercontent.com/83258570/182043643-85058033-482e-49d3-9e27-2617b702d698.jpg)


## Pessoas Desenvolvedoras do Projeto:
<table>
  <tr>
    <td align="center" width="170px;">
      <a href="https://www.linkedin.com/in/lisandradecassia/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102766893?v=4" width="100px;"><br>
        <sub>
        <b>Lisandra Silva</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center" width="170px;">
      <a href="https://www.linkedin.com/in/andre-sqr/">
        <img style="border-radius: 50%; width="100px;"" src="https://avatars.githubusercontent.com/u/102765824?v=4" width="100px;"><br>
        <sub>
        <b>André Siqueira</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center" width="170px;">
      <a href="https://www.linkedin.com/in/matheus-henrique-de-l%C3%A1zaro-silva/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/44203985?v=4" width="100px;"><br>
        <sub>
        <b>Matheus Henrique</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center" width="170px;">
      <a href="https://www.linkedin.com/in/ester-messias-08b706177/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87023023?v=4" width="100px;"><br>
        <sub>
        <b>Ester Messias</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center" width="170px;">
      <a href="https://www.linkedin.com/in/wellisonsales/">
        <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/83258570?v=4" width="100px;"><br>
        <sub>
        <b>Wellison Sales</br>
        <sub>
        <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" width="20px">
        </sub>
      </a>
    </td>
    <td align="center" width="170px;">
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

No terminal/Powershell da sua máquina, digite `git clone` + o link do repositório desta API como demonstrado no comando abaixo:

```
git clone https://github.com/Matheus-Hen/Livraria-Olimpia-API
```
Para iniciar o banco de dados com os dados padrão e popula-lo, rode o comando abaixo:
```
 npm run db
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


# Rotas Implementadas

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
        ]
    },
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
    ]
   },
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
  },
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
    ]
    },
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
    ]
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
    ]
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
    ]
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
    ]
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
  ]
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
    ]
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
  ]
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
  ]
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
  ]
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
    ]
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
    ]
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
  ]
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
    ]
  }
  ```

---

- **GET /pagamentos/idPagamentos/:idPagamentos**

  _Busca pagamento no banco de dados pelo id_

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

  _Busca um pagamento no banco de dados pelo status_

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
    ]
  }
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
    ]
  }
  ```

---

- **GET /pagamentos/valor/:valor**

  _Busca o pagamento no banco de dados pelo valor_

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
    ]
  }
  ```

---

  ***

- **POST /pagamentos/**

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
    }
  }
  ```
---
- **DELETE /pagamentos/id/:id**

  _Realiza uma deleção no banco de dados do pagamento com o id requerido_

  Busca um fornecedor no banco de dados pelo id: 2022

  Esquema de resposta:

  ```json
  {
    "msg": "Pagamento deletado com sucesso",
    "erro": false
  }
  ```
---
- **PUT /pagamentos**

  _Atualiza um ou múltiplos dados de um pagamento desejado_

  Esquema da requisição:

  ```json
    {
            "idPagamentos": 2023,
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

  ```json
  {
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

  _Realiza uma deleção no banco de dados do fornecedor com o id requeridop_

  > id: 1

  ```json
  {
    "msg": "Fornecedor deletado",
    "erro": false
  }
  ```

---

- **PUT /fornecedores/id/:id**

  _Atualização de dados do fornecedor por id_

 ```json
    {
    "id": 23,
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
**GET /funcionario/cpf/:cpf**

  _Procurando um funcionário pelo cpf cadastrado no sistema_

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

  Esquema de resposta:

  ```json
        {
             "id": 1,
            "nome": "Marcos Henrique",
            "email": "marquinho@gmail.com",
            "cpf": "14458658405",
            "telefone": "3436954712",
            "senha": "zmarquinho100"
        }, 
  ```
---
**POST /funcionario**

  _Adicionando funcionário sistema_

  Esquema de edição de funcionário:

  ```json
        {
    "Funcionario": {
        "nome": "Junim",
        "email": "juni.@gmail.com",
        "cpf": "14454548405",
        "telefone": "3736954712",
        "senha": "zmaruinho100",
        "cargo": "Desenvolvedor Junior"
    },
    "erro": false
} 
  ```
  Esquema de resposta:

  ```json
       {
    "msg": "Funcionario inserido com sucesso",
    "funcionario": {},
    "erro": false
       }
  ```
---
**DELETE /funcionario/id/:id**

  _Deleta funcionário do sistema_

  Esquema de deleção:

  ```json
  {
    "msg": "Funcionario deletado com sucesso",
    "erro": false
  }
  ```

- **PUT /funcionario**

  _Atualiza um ou múltiplos dados de um funcionário desejado_

  Esquema da requisição:

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
    },
    }
```
---
### Livros

- **GET /livros**

_Acessando os livros cadastrados no estoque_

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

  _Busca livro no banco de dados pelo ID_

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

  _Busca livro no banco de dados pelo genero_

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

  _Busca livro no banco de dados pelo idioma_

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

  Busca um livro no banco de dados pelo id:
  id: 100013
  
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

  Esquema de requisição de livros:

  ```json
       {
            "idLivro": 1000333,
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
