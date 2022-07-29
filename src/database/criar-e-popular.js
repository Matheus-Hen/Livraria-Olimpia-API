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

function criaTabelaClientes() {
    db.run(CLIENTES_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela clientes: ${error.message}`);
    });
}

// ******************FUNCIONÁRIOS*************************
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
    "id_pagamentos" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cliente" integer,
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
    (002022, 'luana silva de alencar', 'pix', 120, 0, 'pago', '20/08/2022'),
    (002023, 'pedro josé Barros', 'cartao', 89, 2, 'pago', '15/08/2022'),
    (002024, 'marcos santos', 'boleto', 180, 1, 'pago', '02/08/2022'),
    (002025, 'amanda tainá Rosa', 'pix', 59, 0, 'pago', '17/06/2022'),
    (002026, 'ana Julia maria', 'cartao', 59, 0, 'pago', '17/06/2022')
`

function criaTabelaPagamentos() {
    db.run(PAGAMENTOS_SCHEMA, (error)=> {
        if (error) console.log(`Erro na criação da tabela pagamentos: ${error.message}`);
    });
}

function popularTabelaPagamentos() {
    db.run(popularPagamentos, (error)=> {
        if (error) console.log(`Erro ao popular tabela pagamentos: ${error.message}`);
    })
}


// ******************ESTOQUE*************************

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id_pagamentos" INTEGER PRIMARY KEY AUTOINCREMENT,
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

const dadosEstoque = `
INSERT INTO ESTOQUE (id, produto, quantidade, fornecedor)
VALUES 
    (101, 'Livro um', 202,  "Editora Insitrica"),
    (102, 'Livro dois', 502, "Catavento"),
    (103, 'Livro tres', 102, "Porta de Trás"),
    (104, 'Livro quatro', 303, "Editora Devinho"),
    (105, 'Livro cincto', 507, "Editora Perry")
`

function popularDados() {
    db.run(dadosEstoque, (error)=> {
        if (error) console.log(`Erro na criação da população do Estoque: ${error.message}`);
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
    popularDados()
})
