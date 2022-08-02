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

# Rotas

### Estoque

 * __GET  /estoque__ 

    _Conferindo os livros disponíveis no estoque_
    
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

 * __método /rota__ 

    _legenda_
    
    Esquema de resposta:
    ```json
    {
    }
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


