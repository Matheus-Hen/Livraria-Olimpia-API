import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

// ******************LIVROS*************************
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "titulo" text,
    "autor" text,
    "genero" text,
    "formato" text,
    "valor" real,
    "idioma" text,
    "numeroPaginas" int
  );
`

function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela livros: ${error.message}`);
    });
}

// ******************CLIENTES*************************
const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "cpf" text,
    "telefone" text,
    "senha" text,
    "cep" text
  );
`

const CLIENTES_ADD_DATA = `
INSERT INTO CLIENTES (id, nome, email, cpf, telefone, senha, cep)
VALUES 
(1, 'Adriano Silva', 'adrianosilva@gmail.com', '24456634405', '6435380744', 'adrianinho123', '61948530'),
(2, 'Olivia Rogéria', 'good4u@yahoo.com', '48576088207', '8721148532', 'traitor', '59025100'),
(3, 'Taylor Swift', 'folkloreaoty@gmail.com', '44727894181', '9928763448', 'amomeusgatinhos', '69304410'),
(4, 'Pera Pereira', 'perapereira@yahoo.com', '01243297050', '8325412343', 'pear123', '79002914'),
(5, 'Kanye West', 'uniaokanyetaylor@gmail.com', '99421990803', '7937575524', 'thecollegedropout', '65057807')
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela clientes: ${error.message}`);
    });
}


function populaTabelaClientes() {
    db.run(CLIENTES_ADD_DATA, (error) => {
      if (error) console.log("Erro ao popular a tabela de clientes")
    })
  }  

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "cpf" text,
    "telefone" text,
    "senha" text,
    "cargo" text
  );
`

function criaTabelaFuncionarios() {
    db.run(FUNCIONARIOS_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela funcionarios: ${error.message}`);
    });
}

// ******************FORNECEDORES*************************
const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "cnpj" text,
    "telefone" text
  );
`
function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
        if (error) console.log("`Erro na criação da tabela fornecedores: ${error.message}`");
    });
}

// ******************PAGAMENTOS*************************
const PAGAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PAGAMENTOS" (
    "idPagamentos" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cliente" integer,
    "formaDePagamento" text,
    "valor" real,
    "parcelamento" text,
    "status" text,
    "data" text,
   
  );
ALTER TABLE "PAGAMENTOS" 
ADD CONSTRAINT "idLivro" FOREIGN KEY ("id")  REFERENCES "LIVROS" ("id"") 
`
const POPULAR_PAGAMENTOS = `
INSERT INTO PAGAMENTOS (idPagamentos, cliente, formaDePagamento, valor, parcelamento, status, data)
VALUES 
    (002022, 'luana silva de alencar', 'pix', 120, 0, 'pago', '20-08-2022'),
    (002023, 'pedro josé Barros', 'cartao', 89, 2, 'pago', '15-08-2022'),
    (002024, 'marcos santos', 'boleto', 180, 1, 'pago', '02-08-2022'),
    (002025, 'amanda tainá Rosa', 'pix', 59, 0, 'pago', '17-06-2022'),
    (002026, 'ana Julia maria', 'cartao', 59, 0, 'pago', '17-06-2022')
`

function criaTabelaPagamentos() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela pagamentos: ${error.message}`);
    });
}

function popularTabelaPagamentos() {
    db.run(POPULAR_PAGAMENTOS, (error)=> {
        if (error) console.log(`Erro ao popular tabela pagamentos: ${error.message}`);
    })
}

// ******************ESTOQUE*************************
const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "produto" integer,
    "quantidade" integer,
    "fornecedor" integer
  );
`

function criaTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela estoque: ${error.message}`);
    });
}

db.serialize( ()=> {
    criaTabelaLivros()
    criaTabelaClientes()
    populaTabelaClientes()
    criaTabelaFuncionarios()
    criaTabelaFornecedores()
    criaTabelaPagamentos()
    popularTabelaPagamentos()
    criaTabelaEstoque()
})