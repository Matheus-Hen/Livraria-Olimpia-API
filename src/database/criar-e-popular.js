import sqlite3 from 'sqlite3'
sqlite3.verbose()
const db = new sqlite3.Database('olimpia.db');

const ESTOQUE_SCHEMA = `
CREATE TABLE IF NOT EXISTS "ESTOQUE" (
    "id_estoque" int PRIMARY KEY AUTO_INCREMENT,
    "livro" varchar (64)
    "quantidade" varchar (64)
    "entrada" varchar (64)
    "cod_barras" varchar (64)
    "status" varchar (64)
  );
`

const popularEstoque = `
INSERT INTO ESTOQUE (id_estoque, livro, quantidade, entrada, cod_barras, status)
VALUES 
    (101, 'Atirei o pau no gato', '54', '23/05/2002', '03242789734', 'ativo'),
`

function criaTabelaEstoque() {
    db.run(ESTOQUE_SCHEMA, (error)=> {
        if (error) console.log("Erro ao criar tabela de livros");
    });
}

function popularTabelaEstoque() {
    db.run(popularEstoque, (error)=> {
       if (error) console.log("Erro ao popular tabela de usuários");
    })
}

db.serialize( ()=> {
    criaTabelaEstoque()
    popularTabelaEstoque()
})