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
        const BUSCA_LIVROID = `
        SELECT * FROM LIVROS 
        WHERE idLivro = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(BUSCA_LIVROID, idLivro, (error, row)=>{
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

    atualizaLivro : (idLivro, novoDado)=> {
        const ATUALIZA_LIVRO = `
        UPDATE LIVROS 
        SET titulo = ?, autor = ?, genero = ?, formato = ?, valor = ?, idioma = ?, numeroPaginas = ?
        WHERE idLivro = ?
        `
        return new Promise((resolve, reject)=> {
            db.run(ATUALIZA_LIVRO, novoDado.titulo, novoDado.autor, novoDado.genero, novoDado.formato, novoDado.valor, novoDado.idioma, novoDado.numeroPaginas,
            idLivro, (error)=>{
                if (error)
                    reject(error)
                else
                    resolve(novoDado)
            })
        })
    }

    

    
}

export default daoLivros
