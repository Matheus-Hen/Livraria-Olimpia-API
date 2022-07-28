import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "id" int PRIMARY KEY AUTO_INCREMENT,
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
        if (error) console.log("Erro ao criar tabela de livros");
    });
}

const CLIENTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "CLIENTES" (
    "id" int PRIMARY KEY AUTO_INCREMENT,
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
    "id" int PRIMARY KEY AUTO_INCREMENT,
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
    "id" int PRIMARY KEY AUTO_INCREMENT,
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
    "id_pagamentos" int PRIMARY KEY AUTOINCREMENT,
    "cliente" text,
    "forma_pagamento" text,
    "valor" real,
    "parcelamento" text,
    "status" text,
    "data" text
  );
  
`
const popularPagamentos = `
INSERT INTO PAGAMENTOS (id_pagamentos, cliente, forma_pagamento, valor, parcelamento, status, data)
VALUES 
    (002022, 'luana silva de alencar', 'pix', '120', '0', 'pago', '20/08/2022'),
    (002023, 'pedro josé Barros', 'cartao', '89', '2', 'pago', '15/08/2022'),
    (002024, 'marcos santos', 'boleto', '180', '1', 'pago', '02/08/2022'),
    (002025, 'amanda tainá Rosa', 'pix', '59', '0', 'pago', '17/06/2022'),
    (002026, 'ana Julia maria', 'cartao', '59', '0', 'pago', '17/06/2022')
`

function criaTabelaPagamentos() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de pagamentos!");
    });
}

function popularTabelaPagamentos() {
    db.run(popularPagamentos, (error)=> {
       if (error) console.log("Erro ao popular tabela de pagamentos!");
    })
}

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id" int PRIMARY KEY AUTO_INCREMENT,
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
    criaTabelaClientes()
    criaTabelaFuncionarios()
    criaTabelaFornecedores()
    criaTabelaPagamentos()
    popularTabelaPagamentos()
    criaTabelaEstoque()
})