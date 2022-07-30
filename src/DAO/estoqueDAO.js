import db from '../database/connect'

// pegas os dados completos de quantidade ativa no estoque

const totalEstoque = {
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

// inserindo produtos no estoque

insereEstoque: (produtos) => {
    const INSERE_PRODUTO = `
    INSERT INTO PAGAMENTOS (id, produto, quantidade, fornecedor)
    VALUES (?,?,?,?)
    `
    return new Promise((resolve, reject) => {
        db.run(INSERE_PRODUTO,
            produtos.id, produtos.produto, produtos.quantidade, produtos.fornecedor,
            (error) => {
                if (error)
                    reject (error)
                else
                    resolve (produtos)
                }
                )
            })
        }


// conferindo fornecedor no estoque 

const fornecedorEstoque = {
    produtosAtivosEstoque: () => {
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
    }
}

// consultando produtos no estoque

const produtoEstoque = {
    produtosEstoque: () => {
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
    }
}
