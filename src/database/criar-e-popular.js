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