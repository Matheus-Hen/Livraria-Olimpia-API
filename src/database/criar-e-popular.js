import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id_estoque" int PRIMARY KEY AUTO_INCREMENT,
    "id_produto" varchar (64),
    "quantidade" int,
    "id_fornecedor" varchar(64)
  );
`

const ADD_ESTOQUE_SCHEMA = `
INSERT INTO ESTOQUE (id_estoque, id_produto, quantidade, id_fornecedor)
VALUES 
    (101, 'A Divina Comédia', '100', 'Catavento'),
    (102, 'O Rei Leão', '200', 'Editora Intriseca'),
    (103, 'O nome do Vento', '50', 'Editora Máximo')
`

function criaTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de estoque");
    });
}

function popularEstoque() {
    db.run(ADD_ESTOQUE_SCHEMA, (error)=> {
        if (error) console.log(error)
    });
}

db.serialize( ()=> {
    criaTabelaEstoque()
    popularEstoque()
})

