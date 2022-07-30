import db from '../database/connect'


const daoCliente = {

    insereCliente : (estoque)=> {
    const INSERE_ESTOQUE = `
    INSERT INTO ESTOQUE (idProduto, produto, quantidade, fornecedor)
    VALUES (?, ?, ?, ?)
    `
    return new Promise((resolve, reject)=> {
        db.run(INSERE_CLIENTE, estoque.idProduto, estoque.produto, cliente.quantidade,
            cliente.fornecedor,
            (error)=>{
                if (error)
                    reject (error)
                else 
                    resolve (cliente)
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


    // buscando produtos no estoque

    buscarEstoque: () => {
        const PEGA_PRODUTO = `
        SELECT * FROM PRODUTO
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_PRODUTO, (error, row) => {
                if (error) 
                reject(error)
                else
                    resolve(row)
            })
        })
    },

}