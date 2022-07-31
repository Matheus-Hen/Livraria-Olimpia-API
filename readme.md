
<h1 align="center">Livraria Olimpia - API</h1>

![capaolimpiaapi](https://user-images.githubusercontent.com/83258570/182043643-85058033-482e-49d3-9e27-2617b702d698.jpg)


<div align="center">

  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/> 
</div>


  ## Pré-requisitos:

  - Node.js (v.16.15.1)
  - NPM (v.8.11.0)
  - Express (4.18.1)
  - sqlite3 (v5.0.10)
  - Nodemon (v2.0.19)


## O projeto:

A "OlimpiaAPI" é um sistema de gerenciamento de livrarias e pode ser utilizada para armazenador dados de livros, fornecedores, pagamentos, clientes, bem como estoque para gerenciamento de entrada e saída de produtos. Para armazenamento dos dados, a OlimpiaAPI utiliza o Sqlite3 a qual possui infraestrutura para receber cerca de 128TB de dados. 


### 🔧 Instalação:

Para utilizar este projeto de código aberto, é necessário fazer um `git clone` em sua máquina para ter acesso ao ambiente de desenvolvimento. Lembre-se de conferir se você possui instalado o `Node.js` e o gereciador de arquivos `NPM` nas versões citadas em `pré-requisitos`.

No seu terminal, digite `git clone` + o link do repositório desta API:

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

## Tecnologias utilizadas:

## Pessoas Desenvolvedoras do Projeto:

## Licença.







