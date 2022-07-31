import pagamentos from "../model/pagamentosModel.js"

const pagamentosController = {
    pegaPagamentosTodos: async (req, res) => {
        const modelPagamentos = new pagamentos()
        const todosPagamentos = await modelPagamentos.pegaPagamentosTodos()

        res.json({
            "pagamentos": todosPagamentos,
            "erro": false
        })
    },

    pegaPagamentosId: async (req, res) => {
        const idPagamentos = req.params.idPagamentos
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosId(idPagamentos)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosStatus: async (req, res) => {
        const status = req.params.status
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosStatus(status)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosForma: async (req, res) => {
        const formaDePagamento = req.params.formaDePagamento
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosForma(formaDePagamento)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosData: async (req, res) => {
        const data = req.params.data
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosData(data)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosValor: async (req, res) => {
        const valor = req.params.valor
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosValor(valor)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosParcelamento: async (req, res) => {
        const parcelamento = req.params.parcelamento
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosParcelamento(parcelamento)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    pegaPagamentosCliente: async (req, res) => {
        const cliente = req.params.cliente
        const modelPagamentos = new pagamentos()
        const pegaresultado = await modelPagamentos.pegaPagamentosCliente(cliente)

        res.json({
            "pagamentos": pegaresultado,
            "erro": false
        })
    },

    inserePagamentos: async (req, res) => {
        const body = req.body
        const modelPagamentos = new pagamentos()
        try {
            const novoPagamento = criaCliente(body.idPagamentos, body.cliente, body.formaDePagamento, body.valor,
                body.parcelamento, body.status, body.data)
            await modelPagamentos.inserePagamentos(novoPagamento)

            res.json(
                {
                    "msg": "Pagamento inserido com sucesso",
                    "pagamentos": novoPagamento,
                    "erro": false
                }
            )

        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    },


    deletaPagamento: async (req, res) => {
        const modelPagamentos = new pagamentos()
        const idPagamentos = req.params.idPagamentos
        try {
            await modelPagamentos.removerCliente(idPagamentos)

            res.json(
                {
                    "msg": "Pagamento deletado com sucesso",
                    "erro": false
                }
            )
        } catch (error) {
            res.json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    },

}

export default pagamentosController