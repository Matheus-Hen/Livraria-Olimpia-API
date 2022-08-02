import db from '../database/connect.js'

const daoLivros = {

    cadastrarLivro : (livro)=>{
        const ADD_LIVRO = `
        INSERT INTO LIVROS (titulo, autor, genero, formato, valor, idioma, numeroPaginas)
        VALUES (?,?,?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(ADD_LIVRO, 
                livro.titulo, 
                livro.autor, 
                livro.genero, 
                livro.formato, 
                livro.valor, 
                livro.idioma, 
                livro.numeroPaginas,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(livro)
                }
            )
        })
    },

    listarLivros : ()=>{
        const LISTAR_LIVROS = `
        SELECT * FROM LIVROS
        `
        return new Promise((resolve, reject)=>{
            db.all(LISTAR_LIVROS, (error,row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    buscaLivro : (titulo)=>{
        const BUSCA_LIVRO = `
        SELECT * FROM LIVROS 
        WHERE titulo = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(BUSCA_LIVRO, titulo, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    buscaLivroId : (idLivro)=>{
        const BUSCA_LIVRO = `
        SELECT * FROM LIVROS 
        WHERE idLivro = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(BUSCA_LIVRO, idLivro, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    removeLivro : (idLivro) => {
        const DELETA_LIVRO = `
        DELETE FROM LIVROS 
        WHERE idLivro = ?
        `

        return new Promise ((resolve, reject) => {
            db.run(DELETA_LIVRO, idLivro, (error, row)=> {
                if (error)
                    reject (error)
                else
                    resolve (row)
            })
        })

    },

    atualizaValorLivro : (idLivro, novoValor)=> {
        const ATUALIZA_VALOR = `
        UPDATE LIVROS
        SET valor = ?
        WHERE idLivro = ?
        `
        return new Promise((resolve, reject)=> {
            db.run(ATUALIZA_VALOR, 
                novoValor.valor, idLivro,
                (error)=>{
                    if (error)
                        reject(error)
                    else
                        resolve(novoValor)
                })
        })
    }

    

    
}

export default daoLivros
