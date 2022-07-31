import sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database("olimpia.db");

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
`;

function criaTabelaLivros() {
  db.run(LIVROS_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela livros: ${error.message}`);
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
`;

function criaTabelaClientes() {
  db.run(CLIENTES_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela clientes: ${error.message}`);
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
`;

function criaTabelaFuncionarios() {
  db.run(FUNCIONARIOS_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela funcionarios: ${error.message}`);
  });
}

const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
  "id" INTEGER PRIMARY KEY AUTOINCREMENT,
  "nome" text,
  "cnpj" text,
  "produto" text,
  "email" text,
  "telefone" text,
  "endereco" text,
  "cep" text
  );
`;

const populando_fornecedores = `
    INSERT INTO FORNECEDORES (id, nome, cnpj, produto, email, telefone, endereco, cep)
VALUES 
    (001, 'PAPERSHIFT', '03546726000111', 'Artigos de Papelaria', 'compras@papershift.com.br', '55 19 23768254', 'Avenida Barcelona, 1405 - Agua Branca, Campinas - SP', '03945080'),

    (002, 'A Página', '01795809000110', 'Livros', 'compras@apagina.com.br', '55 41 32135643', 'Rua Major Fabriciano do Rego Barros, 1050 - Hauer, Curitiba - PR', '01830260'),

    (003, 'Trucks LTDA', '05938204710110', 'Chaveiros', 'compras@trucks.com.br', '55 32 77638271', 'Rua Jão Pires de Lima, 405 - Santos, Belo Horizonte - MG', '01632360'),

    (004, 'Safe&Sound', '082718275600110', 'Artigos Musicais', 'compras@safeandsound.com.br', '55 65 55789452', 'Rua Vicente Martins, 200 - Pereira, Cuiabá - MT', '08354780'),

    (005, 'Bookstan', '01746378240110', 'Livros', 'compras@bookstan.com.br', '55 98 88748278', 'Rua Graciliano Ramos, 400 - Assis, São Luís - MA', '04985570')
    `;

function criaTabelaFornecedores() {
  db.run(FORNECEDORES_SCHEMA, (error) => {
    if (error)
      console.log("`Erro na criação da tabela fornecedores: ${error.message}`");
  });
}

function popularTabelaFornecedores() {
  db.run(populando_fornecedores, (error) => {
    if (error)
      console.log(`Erro ao popular tabela Fornecedores: ${error.message}`);
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
  
`;

function criaTabelaPagamentos() {
  db.run(PAGAMENTOS_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela pagamentos: ${error.message}`);
  });
}

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id" INTEGER PRIMARY KEY AUTOINCREMENT,
    "produto" integer,
    "quantidade" integer,
    "fornecedor" integer
  );
`;

function criaTabelaEstoque() {
  db.run(ESTOQUE_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela estoque: ${error.message}`);
  });
}

db.serialize(() => {
  criaTabelaLivros();
  criaTabelaClientes();
  criaTabelaFuncionarios();
  criaTabelaFornecedores();
  popularTabelaFornecedores();
  criaTabelaPagamentos();
  criaTabelaEstoque();
});
