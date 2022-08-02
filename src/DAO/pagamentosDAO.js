import db from '../database/connect.js'

const daoPagamentos = {

    pegaPagamentosTodos: () => {
        const PEGA_PAGAMENTOS_GERAL = `
        SELECT * FROM PAGAMENTOS
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_PAGAMENTOS_GERAL, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    inserePagamentos : (pagamentos)=>{
        const INSERE_PAGAMENTO = `
        INSERT INTO PAGAMENTOS (idPagamentos, cliente, formaDePagamento, valor, parcelamento, status, data, idLivro)
        VALUES (?,?,?,?,?,?,?)
        `
        return new Promise((resolve, reject)=>{
            db.run(INSERE_PAGAMENTO,
                pagamentos.idPagamentos, pagamentos.cliente, pagamentos.formaDePagamento, pagamentos.valor, pagamentos.parcelamento, pagamentos.status, pagamentos.data,
                (error)=>{
                    if(error)
                        reject(error)
                    else
                        resolve(pagamentos)
                }
            )
        })
    },

    pegaPagamentosId: (idPagamentos) => {
        const PEGA_PAGAMENTOS_IDPAGAMENTOS = `
        SELECT * FROM PAGAMENTOS 
        WHERE idPagamentos = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_PAGAMENTOS_IDPAGAMENTOS, idPagamentos, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosStatus: (status) => {
        const PEGA_PAGAMENTOS_STATUS = `
        SELECT * FROM PAGAMENTOS 
        WHERE status = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_PAGAMENTOS_STATUS, status, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosForma: (formaDePagamento) => {
        const PEGA_FORMA_PAGAMENTO = `
        SELECT * FROM PAGAMENTOS 
        WHERE formaDePagamento = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_FORMA_PAGAMENTO, formaDePagamento, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosData: (data) => {
        const PEGA_DATA = `
        SELECT * FROM PAGAMENTOS 
        WHERE data = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_DATA, data, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosValor: (valor) => {
        const PEGA_VALOR = `
        SELECT * FROM PAGAMENTOS 
        WHERE valor = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_VALOR, valor, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosParcelamento: (parcelamento) => {
        const PEGA_PARCELAMENTO = `
        SELECT * FROM PAGAMENTOS 
        WHERE parcelamento = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_PARCELAMENTO, parcelamento, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    pegaPagamentosCliente: (cliente) => {
        const PEGA_CLIENTE = `
        SELECT * FROM PAGAMENTOS 
        WHERE cliente = ?
        `

        return new Promise((resolve, reject) => {
            db.all(PEGA_CLIENTE, cliente, (error, row) => {
                if (error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    deletaPagamento : (idPagamentos)=>{
        const DELETA_PAGAMENTO = `
        DELETE FROM PAGAMENTOS
        WHERE idPagamentos = ?
        `
        return new Promise((resolve, reject)=>{
            db.get(DELETA_PAGAMENTO, idPagamentos, (error, row)=>{
                if(error)
                    reject(error)
                else
                    resolve(row)
            })
        })
    },

    atualizarPagamento : (idPagamentos, novasInformacoes)=> {
        const ATUALIZA_PAGAMENTO = `
        UPDATE PAGAMENTOS
        SET
        cliente = ?, formaDePagamento = ?, valor = ?, parcelamento = ?, status = ?, data = ?
        WHERE idPagamentos = ?
        `

        return new Promise((resolve, reject)=> {
            db.run(ATUALIZA_PAGAMENTO, 
                novasInformacoes.cliente, novasInformacoes.formaDePagamento, 
                novasInformacoes.valor, novasInformacoes.parcelamento, novasInformacoes.status, novasInformacoes.data, idPagamentos,
                (error)=>{
                    if (error)
                        reject(error)
                    else
                        resolve(novasInformacoes)
                })
        })
    }
}

export default daoPagamentos