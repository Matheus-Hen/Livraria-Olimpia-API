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
    criaTabelaFornecedores()
    criaTabelaPagamentos()
    criaTabelaEstoque()
})

export default db