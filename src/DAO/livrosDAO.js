import db from '../database/connect.js'

const daoLivros = {

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

    cadastrarLivro : (livro)=>{
        const ADD_LIVRO = `
        INSERT INTO LIVROS (idLivro, titulo, autor, genero, formato, valor, idioma, numeroPaginas)
        VALUES (?,?,?,?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(ADD_LIVRO,
                livro.idLivro, 
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

    
}

export default daoLivros
