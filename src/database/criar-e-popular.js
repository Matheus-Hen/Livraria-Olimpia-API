import sqlite from 'sqlite3'
sqlite.verbose()


const db = new sqlite.Database('olimpia.db', (err)=> {
    if (err) {
        console.log(`Erro: ${err.message}`)
    } else {
        console.log("Banco de dados conectado")
    }
});

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Banco de dados encerrado!');
        process.exit(0);
    })
);


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
    db.run(LIVROS_SCHEMA, (error) => {
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

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error) => {
        if (error) console.log(`Erro na criação da tabela clientes: ${error.message}`);
    });
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
const FUNCIONARIOS_ADD_DATA = `
INSERT INTO FUNCIONARIOS (id, nome, email, cpf, telefone, senha, cargo)
VALUES 
(1, 'Marcos Henrique', 'marquinho@gmail.com', '14458658405', '3436954712', 'zmarquinho100', 'CEO'),
(2, 'Maria Eduarda', 'dudinha@yahoo.com', '15736428425', '34995142687', 'lovemylife', 'gerente'),
(3, 'Taylor Swift', 'folkloreaoty@gmail.com', '44727894181', '9928763448', 'amomeusgatinhos', 'Vendedora'),
(4, 'Selena Gomez', 'seleninha@yahoo.com', '01243297050', '3125412343', 'gomez321   ', 'Chefe de Departamento'),
(5, 'Emma Watson', 'EmmaW@gmail.com', '75238428425', '1237575524', 'hermione123', 'Consultora')
`

function populaTabelaFuncionarios() {
    db.run(FUNCIONARIOS_ADD_DATA, (error) => {
      if (error) console.log("Erro ao popular a tabela de Funcionarios")
    })
  }  

function criaTabelaFuncionarios() {
    db.run(FUNCIONARIOS_SCHEMA, (error) => {
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
    db.run(FORNECEDORES_SCHEMA, (error) => {
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
    db.run(PAGAMENTOS_SCHEMA, (error) => {
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
    db.run(ESTOQUE_SCHEMA, (error) => {
        if (error) console.log(`Erro na criação da tabela estoque: ${error.message}`);
    });
}

db.serialize(() => {
    criaTabelaLivros()
    criaTabelaClientes()
    criaTabelaFuncionarios()
    populaTabelaFuncionarios()
    criaTabelaFornecedores()
    criaTabelaPagamentos()
    criaTabelaEstoque()
})

export default db