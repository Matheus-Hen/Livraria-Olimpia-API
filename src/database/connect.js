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

export default db