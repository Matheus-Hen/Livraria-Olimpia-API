import sqlite3 from "sqlite3";
sqlite3.verbose();
const db = new sqlite3.Database("olimpia.db");

// ******************LIVROS*************************
const LIVROS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "LIVROS" (
    "idLivro" INTEGER PRIMARY KEY AUTOINCREMENT,
    "titulo" text,
    "autor" text,
    "genero" text,
    "formato" text,
    "valor" real,
    "idioma" text,
    "numeroPaginas" int
  );
`;

const LIVROS_ADD_DATA = `
INSERT INTO LIVROS (idLivro, titulo, autor, genero, formato, valor, idioma, numeroPaginas)
VALUES 
    (100001, 'O Pequeno Principe',              'Antoine de Saint Exupéry',     'Literatura Infanto juvenil',   'Físico',   20, 'Português',   96),
    (100004, 'As Brumas de Avalon',             'Marion Zimmer Bradley',        'Romance',                      'Físico',   42, 'Português',    320),
    (100005, 'The Shining',                     'Stephen King',                 'Ficção',                       'Digital',  30, 'Inglês',       324),
    (100006, 'Contact',                         'Carl Sagan',                   'Romance',                      'Físico',   35, 'Inglês',       432),
    (100007, 'O Lado Feio do Amor',             'Colleen Hover',                'Romance',                      'Físico',   33, 'Português',    256),
    (100008, 'Vulgo Grace',                     'Margaret Atwood',              'Ficção Policial',              'Digital',  89, 'Português',	512),
    (100009, 'O Homem do Castelo Alto',	        'Philip K. Dick',               'Literatura',                   'Físico',   47, 'Português',    288),
    (100010, 'The Book Thief',                  'Markus Zusak',                 'Romance',                      'Físico',   45, 'Alemão',       480),
    (100011, 'Verity',                          'Colleen Hoover',               'Suspense',                     'Digital',  84, 'Inglês',       270),
    (100012, 'The Miracle Morning',             'Hal Elrod',                    'Autoajuda',                    'Físico',   57, 'Inglês',       196),
    (100013, 'A Invenção de Morel',             'Adolfo Bioy Casares',          'Ficção Científica',            'Físico',   43, 'Português',    160),
    (100014, 'Duna',                            'Frank Herbert',                'Ficção Científica',            'Digital',  77, 'Inglês',       544)
`;

function criaTabelaLivros() {
  db.run(LIVROS_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela livros: ${error.message}`);
  });
}

function populaTabelaLivros() {
    db.run(LIVROS_ADD_DATA, (error) => {
      if (error) console.log(`Erro ao popular a tabela de livros ${error.message}`)
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
`;

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
  db.run(CLIENTES_SCHEMA, (error) => {
    if (error)
      console.log(`Erro na criação da tabela clientes: ${error.message}`);
  });
}


function populaTabelaClientes() {
    db.run(CLIENTES_ADD_DATA, (error) => {
      if (error) console.log("Erro ao popular a tabela de clientes")
    })
  }  

// ******************FUNCIONARIOS*************************

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

// ******************FORNECEDORES*************************
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
    (1, 'PAPERSHIFT', '03546726000111', 'Artigos de Papelaria', 'compras@papershift.com.br', '55 19 23768254', 'Avenida Barcelona, 1405 - Agua Branca, Campinas - SP', '03945080'),

    (2, 'A Página', '01795809000110', 'Livros', 'compras@apagina.com.br', '55 41 32135643', 'Rua Major Fabriciano do Rego Barros, 1050 - Hauer, Curitiba - PR', '01830260'),

    (3, 'Trucks LTDA', '05938204710110', 'Chaveiros', 'compras@trucks.com.br', '55 32 77638271', 'Rua Jão Pires de Lima, 405 - Santos, Belo Horizonte - MG', '01632360'),

    (4, 'Safe&Sound', '082718275600110', 'Artigos Musicais', 'compras@safeandsound.com.br', '55 65 55789452', 'Rua Vicente Martins, 200 - Pereira, Cuiabá - MT', '08354780'),

    (5, 'Bookstan', '01746378240110', 'Livros', 'compras@bookstan.com.br', '55 98 88748278', 'Rua Graciliano Ramos, 400 - Assis, São Luís - MA', '04985570')
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

// ******************PAGAMENTOS*************************

const PAGAMENTOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PAGAMENTOS" (
    "idPagamentos" INTEGER PRIMARY KEY AUTOINCREMENT,
    "cliente" text,
    "formaDePagamento" text,
    "valor" real,
    "parcelamento" text,
    "status" text,
    "data" text
    );
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
    db.run(PAGAMENTOS_SCHEMA, (error) => {
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
    "idEstoque" INTEGER PRIMARY KEY AUTOINCREMENT,
    "produto" text,
    "quantidade" INTEGER ,
    "fornecedor" text
  );
`;

function criaTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error) => {
        if (error) console.log(`Erro na criação da tabela estoque: ${error.message}`);
    });
}

const dadosEstoque = `
INSERT INTO ESTOQUE (idEstoque, produto, quantidade, fornecedor)
VALUES 
    (101, 'Livro um', 202,  "Editora Insitrica"),
    (102, 'Livro dois', 502, "Catavento"),
    (103, 'Livro tres', 102, "Porta de Trás"),
    (104, 'Livro quatro', 303, "Editora Devinho"),
    (105, 'Livro cincto', 507, "Editora Perry")
`

function popularEstoque() {
    db.run(dadosEstoque, (error)=> {
        if (error) console.log(`Erro na criação da população do Estoque: ${error.message}`);
    });
}

db.serialize( ()=> {
    criaTabelaLivros()
    populaTabelaLivros()
    criaTabelaClientes()
    populaTabelaClientes()
    criaTabelaFuncionarios()
    populaTabelaFuncionarios()
    criaTabelaFornecedores()
    popularTabelaFornecedores()
    criaTabelaEstoque()
    popularEstoque()
    criaTabelaPagamentos()
    popularTabelaPagamentos()
})
