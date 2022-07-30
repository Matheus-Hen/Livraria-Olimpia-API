import dao from '../DAO/pagamentosDAO.js'

const pagamentos = {

    pegaPagamentosTodos: async () => {
        return await dao.pegaPagamentosTodos()
    },

    pegaPagamentosId: async (idPagamentos) => {
        return await dao.pegaUsuarioId(idPagamentos)
    },

    pegaPagamentosStatus: async (status) => {
        return await dao.pegaPagamentosStatus(status)
    },

    pegaPagamentosForma: async (formaDePagamento) => {
        return await dao.pegaPagamentosForma(formaDePagamento)
    },

    pegaPagamentosData: async (data) => {
        return await dao.pegaPagamentosData(data)
    },

    pegaPagamentosValor: async (valor) => {
        return await dao.pegaPagamentosValor(valor)
    },

    pegaPagamentosParcelamento: async (parcelamento) => {
        return await dao.pegaPagamentosParcelamento(parcelamento)
    },

    pegaPagamentosCliente: async (cliente) => {
        return await dao.pegaPagamentosCliente(cliente)
    },

    deletaUsuario: async (idPagamentos) => {
        return await dao.deletaUsuario(idPagamentos)
    },

    inserePagamento: async (pagamentos) => {
        return await dao.inserePagamento(pagamentos)
    },

    atualizaPagamento: async (idPagamentos, novasInformacoes) => {
        const informacaoAtual = await pagamentosModel.pegaUmUsuarioId(idPagamentos)
        console.log(informacaoAtual)
        if (informacaoAtual) {
            const informacaoAtualizada = {
                "idPagamentos": novasInformacoes.idPagamentos || informacaoAtual.idPagamentos,
                "cliente": novasInformacoes.cliente || informacaoAtual.cliente,
                "formaDePagamento": novasInformacoes.formaDePagamento || informacaoAtual.formaDePagamento,
                "valor": novasInformacoes.valor || informacaoAtual.valor,
                "parcelamento": novasInformacoes.parcelamento || informacaoAtual.parcelamento,
                "status": novasInformacoes.status || informacaoAtual.status,
                "data": novasInformacoes.data || informacaoAtual.data
            }
            return await dao.atualizaPagamento(idPagamentos, informacaoAtualizada)
        } else {
            throw new Error("pagamento não localizado")
        }

    },
}

export default pagamentosModel