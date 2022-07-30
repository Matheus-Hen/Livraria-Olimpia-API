import pagamentos from "../model/pagamentosModel.js"

const pagamentosController = {
    pegaPagamentos : async (req, res)=> {
        const modelPagamentos = new pagamentos()
        const todosPagamentos = await modelPagamentos.pegaPagamentosTodos()

        res.json({
            "pagamentos": todosPagamentos,
            "erro": false
        })
    },

    pegaPagamentoPeloId: async (req, res)=> {
        const idPagamentos = req.params.idPagamentos
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosId(idPagamentos)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentoPeloStatus: async (req, res)=> {
        const status = req.params.status
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosStatus(status)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentoPelaFormaDePagamento: async (req, res)=> {
        const formaDePagamento = req.params.formaDePagamento
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosForma(formaDePagamento)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentoPelaData: async (req, res)=> {
        const data = req.params.data
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosData(data)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentoPeloValor: async (req, res)=> {
        const valor = req.params.valor
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosValor(valor)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentoPeloValor: async (req, res)=> {
        const parcelamento = req.params.parcelamento
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosParcelamento(parcelamento)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },
}

export default pagamentosController