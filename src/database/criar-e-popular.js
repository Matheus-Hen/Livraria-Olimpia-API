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


db.serialize( ()=> {
    criaTabelaLivros()
    populaTabelaLivros()
})
