import db from '../database/connect'

const daoEstoque = {
    quantidadeEstoque: () => {
        const PEGA_QUANTIDADE_GERAL = `
        SELECT * FROM QUANTIDADE
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_QUANTIDADE_GERAL, (error, row) => {
                if (error) 
                reject(error)
                else
                    resolve(row)
            })
        })
    }
}

insereEstoque: (produtos) => {
    const INSERE_PRODUTO = `
    INSERT INTO PAGAMENTOS (id, produto, quantidade, fornecedor)
    VALUES (?,?,?,?)
    `
    return new Promise((resole, reject) => {
        db.run(INSERE_PRODUTO,
            produtos.produto, produtos.quantidade, produtos.fornecedor)
    })
}