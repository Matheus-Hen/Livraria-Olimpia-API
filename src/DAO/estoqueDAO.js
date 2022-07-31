import db from '../database/connect.js'


const daoEstoque = {

    insereEstoque : (estoque)=> {
    const INSERE_ESTOQUE = `
    INSERT INTO ESTOQUE (produto, quantidade, fornecedor)
    VALUES (?, ?, ?)
    `
    return new Promise((resolve, reject)=> {
        db.get(INSERE_ESTOQUE, estoque.produto, estoque.quantidade,
            estoque.fornecedor,
            (error)=>{
                if (error)
                    reject (error)
                else 
                    resolve (estoque)
            })
    })
    },


    // buscando fornecedor no estoque 


    buscarFornecedorEstoque: () => {
        const PEGA_FORNECEDOR = `
        SELECT * FROM FORNECEDOR
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_FORNECEDOR, (error, row) => {
                if (error) 
                reject(error)
                else
                    resolve(row)
            })
        })
    },


    // buscando todos os produtos do estoque

    buscarEstoque: () => {
        const PEGA_ESTOQUE = `
        SELECT * FROM ESTOQUE
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_ESTOQUE, (error, row) => {
                if (error) 
                reject(error)
                else
                    resolve(row)
            })
        })
    },

    buscarQuantidade: () => {
        const PEGA_QUANTIDADE = `
        SELECT * FROM QUANTIDADE
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_QUANTIDADE, (error, row) => {
                if (error) 
                reject(error)
                else
                    resolve(row)
            })
        })
    },

}

export default daoEstoque