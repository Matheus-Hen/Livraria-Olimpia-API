import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "id_livro" int PRIMARY KEY AUTOINCREMENT,
    "titulo" text,
    "autor" text,
    "genero" text,
    "formato" text,
    "valor" real,
    "idioma" text,
    "numeroPaginas" int
  );
`

const LIVROS_ADD_DATA = `
INSERT INTO LIVROS (id_livro, título, autor, genero, formato, valor, idioma, numeroPaginas)
VALUES 
    (100001, 'O Pequeno Principe', 'Antoine de Saint-Exupéry', 'Literatura Infanto-juvenil', 'Físico', 20.00, 'Português', 96),
    (100002, 'A Máquina de Fazer Espanhóis', 'Valter Hugo Mãe', 'Romance', 'Físico', 56.00, 'Português', 248),
    (100004, 'As Brumas de Avalon', 'Marion Zimmer Bradley', 'Romance; Literatura Fantástica', 'Físico', 42.00, 'Português', 320),
    (100005, 'The Shining', 'Stephen King', 'Terror; Romance; Ficção', 'Digital',  30.00, 'Inglês', 324),
    (100006, 'Contact', 'Carl Sagan','Romance','Físico', 35.00, 'Inglês', 432),
    (100007, 'O Lado Feio do Amor', 'Colleen Hover', 'Romance','Físico', 33.00, 'Português', 256),
    (100008, 'Vulgo Grace','Margaret Atwood', 'Ficção Policial','Digital',  89.00, 'Português',	512),
    (100009, 'O Homem do Castelo Alto',	'Philip K. Dick', 'Literatura; Ficção', 'Físico', 47.00, 'Português', 288),
    (100010, 'The Book Thief', 'Markus Zusak', 'Romance; Ficção', 'Físico', 45.00, 'Alemão', 480),
    (100011, 'Verity', 'Colleen Hoover', 'Romance; Suspense; Ficção', 'Digital', 84.00, 'Inglês', 270),
    (100012, 'The Miracle Morning', 'Hal Elrod', 'Autoajuda', 'Físico', 57.00, 'Inglês', 196),
    (100013, 'A Invenção de Morel', 'Adolfo Bioy Casares', 'Romance; Ficção Científica', 'Físico', 43.00, 'Português', 160),
    (100014, 'Duna', 'Frank Herbert', 'Literatura; Ficção Científica', 'Digital', 77.00, 'Inglês', 544)
`
function criaTabelaLivros() {
    db.run(LIVROS_SCHEMA, (error)=> {
        if (error) console.log(`Erro ao criar tabela de livros: ${error.message}`);
    });
}

function populaTabelaLivros() {
    db.run(LIVROS_ADD_DATA, (error) => {
      if (error) console.log("Erro ao popular a tabela de clientes")
    })
}  


const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id" int PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "cpf" text,
    "telefone" text,
    "senha" text,
    "cep" text
  );
`

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de clientes");
    });
}

const FUNCIONARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FUNCIONARIOS" (
    "id" int PRIMARY KEY AUTOINCREMENT,
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
        if (error) console.log("Erro ao criar tabela de funcionários");
    });
}


const FORNECEDORES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "FORNECEDORES" (
    "id" int PRIMARY KEY AUTOINCREMENT,
    "nome" text,
    "email" text,
    "cnpj" text,
    "telefone" text
  );
`
function criaTabelaFornecedores() {
    db.run(FORNECEDORES_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de fornecedores");
    });
}


const PAGAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PAGAMENTOS" (
    "id" int PRIMARY KEY AUTOINCREMENT,
    "cliente" int,
    "forma_pagamento" text,
    "valor" real,
    "parcelamento" text,
    "status" text,
    "data" text
  );
  
`

function criaTabelaPagamentos() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de pagamentos");
    });
}


const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id" int PRIMARY KEY AUTOINCREMENT,
    "produto" int,
    "quantidade" int,
    "fornecedor" int
  );
`

function criaTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de estoque");
    });
}

db.serialize( ()=> {
    criaTabelaLivros()
    populaTabelaLivros()
    criaTabelaClientes()
    criaTabelaFuncionarios()
    criaTabelaFornecedores()
    criaTabelaPagamentos()
    criaTabelaEstoque()
})