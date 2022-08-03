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


###  Instalação:

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

###  Reinicialização do banco de dados:

Por padrão, o banco de dados da OlimpiaAPI possui dados populados de forma simulada e está representado como `olimpia.db` nos arquivos do projeto. Dessa forma, você pode realizar consultas de rotas sem a necessidade de inicializar o banco. Mas, se caso deseja reiniciar por algum motivo o banco, utilize o comando abaixo no terminal após os passos anteriores. 

```
npm run db
```

# Rotas

### Clientes

 * __GET  /clientes__ 

     _Confere os clientes registrados no banco de dados_

     Esquema de resposta:
     
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

---

  * __GET  /clientes/nome/:nome__ 

     _Busca um cliente no banco de dados pelo nome_

     Esquema de resposta:
      ```json
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

---

   * __GET  /clientes/cpf/:cpf__ 

     _Busca um cliente no banco de dados pelo CPF_

     Esquema de resposta:
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```
    
---

   * __GET  /clientes/email/:email__ 

     _Busca um cliente no banco de dados pelo email_

     Esquema de resposta:
     
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

---
    
   * __GET  /clientes/id/:id__ 

     _Busca um cliente no banco de dados pelo ID_

     Esquema de resposta:
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

---
    
   * __POST  /clientes__ 

     _Cria um novo cliente e insere no banco de dados_

       Esquema da requisição:
       
      ```json
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

     Esquema de resposta:
     
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```
   ---

   * __PUT  /clientes__ 

     _Atualiza um ou múltiplos dados de um cliente desejado_

        Esquema da requisição:
      ```
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
        ```

 Esquema de resposta:
   
      ```
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```
---
   * __DELETE  /clientes/id/:id__ 

     _Realiza uma deleção no banco de dados do cliente com o ID requerido_

     Esquema de resposta:
      ```json
    {
        "produtos": [
            {
                "idEstoque": 101,
                "produto": "Código Limpo",
                "quantidade": 457,
                "fornecedor": "Editora Alta Books"
            }
        ],
    ```

---

### Estoque

 * __GET  /estoque__ 

 _Acessando os produtos cadastrados no estoque_

 Esquema de resposta:

 ```

{
    "produtos": [
        {
            "idEstoque": 101,
            "produto": "Código Limpo",
            "quantidade": 457,
            "fornecedor": "Editora Alta Books"
        }
    ],
 ```
 
---

 * __POST  /estoque__ 
 
 _Inserindo novos produtos em estoque_

  Esquema de inserção de um novo produto:

        {
            "produto": "Diário de um banana",
            "quantidade": 500,
            "fornecedor": "Fernando LTDA"
        }

   Ao adicionar um produto ao estoque, o sistema colocará um id automáticamente.


  Esquema de resposta de um produto inserido :
 ```
{
    "msg": "Um novo produto foi inserido com sucesso",
    "estoque": {
        "produto": "Diário de um banana",
        "quantidade": 500,
        "fornecedor": "Fernando LTDA"
    },
    "erro": false
}
 ```
---

* __GET  /estoque/id__ 


  _Buscando um produto pelo ID no sistema_

  Adicione o número do id que está buscando. Neste exemplo, usaremos o id 106 que foi cadastrado no passo anterior :

  > http://localhost:3000/estoque/id/106

  Como resposta, você receberá este esquema :
  
 ```
{
    "produtos": [
        {
            "idEstoque": 106,
            "produto": "Diário de um banana",
            "quantidade": 500,
            "fornecedor": "Fernando LTDA"
        }
    ],
    "erro": false
}
 ```
 
---


* __DELETE  /estoque__ 


  _Removendo um produto do estoque_ 

  Adicione no corpo da mensagem o produto que deseja remover :

 ```
            {
            "idEstoque": 106,
            "produto": "Diário de um banana 2",
            "quantidade": 500,
            "fornecedor": "Fernando LTDA"
            }
 ```
  Como resposta, você receberá este esquema :

 ```
{
    "msg": "O produto foi removido do estoque",
    "erro": false
}

 ```
---

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


