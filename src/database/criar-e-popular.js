import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

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


const PAGAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PAGAMENTOS" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cliente" integer,
    "forma_pagamento" text,
    "valor" real,
    "parcelamento" text,
    "status" text,
    "data" text
  );
  
`

function criaTabelaPagamentos() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela pagamentos: ${error.message}`);
    });
}


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
    criaTabelaEstoque()
})