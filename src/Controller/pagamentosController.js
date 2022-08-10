import pagamentos from "../model/pagamentosModel.js"
import {criaPagamento} from "../services/validacoesPagamentos.js"

const modelPagamentos = new pagamentos()

const pagamentosController = {
    pegaPagamentosTodos: async (req, res) => {
        try {
            const resposta = await modelPagamentos.pegaPagamentosTodos()
        
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json(
                {"msg": error.message,
                "erro": true}
                )
        }

    },

    pegaPagamentosId: async (req, res) => {
        try {
            const idPagamentos = req.params.idPagamentos
            const resposta = await modelPagamentos.pegaPagamentosId(idPagamentos)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })

        }
    },

    pegaPagamentosStatus: async (req, res) => {     
        try {
            const status = req.params.status
            const resposta= await modelPagamentos.pegaPagamentosStatus(status)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    pegaPagamentosForma: async (req, res) => {
        try {
            const formaDePagamento = req.params.formaDePagamento
            const resposta = await modelPagamentos.pegaPagamentosForma(formaDePagamento)
            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    pegaPagamentosData: async (req, res) => {
        try {
            const data = req.params.data
            const resposta = await modelPagamentos.pegaPagamentosData(data)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    pegaPagamentosValor: async (req, res) => {
        try {
            const valor = req.params.valor
            const resposta = await modelPagamentos.pegaPagamentosValor(valor)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    pegaPagamentosParcelamento: async (req, res) => {
        try {
            const parcelamento = req.params.parcelamento
            const resposta = await modelPagamentos.pegaPagamentosParcelamento(parcelamento)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    pegaPagamentosCliente: async (req, res) => {     
        try {
            const cliente = req.params.cliente
            const resposta = await modelPagamentos.pegaPagamentosCliente(cliente)

            if (resposta.status === 200) {
                res.status(resposta.status).json({
                    "pagamentos": resposta.dados,
                    "erro": false
                })
            } else {
                res.status(resposta.status).json({
                    "msg": resposta.mensagem,
                    "erro": true
                })
            }
        } catch (error) {
            res.status(500).json({
                "msg": error.message,
                "erro": true
            })
        }
    },

    inserePagamentos: async (req, res) => {
        const body = req.body
        try {
            const novoPagamento = criaPagamento(body.idPagamentos, body.cliente, body.formaDePagamento, body.valor,
                body.parcelamento, body.status, body.data, body.idLivro, body.QuantLivro)
            const resposta = await modelPagamentos.inserePagamentos(novoPagamento)

            res.status(resposta.status).json(
                {
                    "msg": "Pagamento inserido com sucesso",
                    "pagamentos": resposta.dados,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    },

    atualizarPagamento: async (req, res) => {
        const idPagamentos = req.params.idPagamentos
        const body = req.body
        try {
            const pagamentoAtualizado = criaPagamento(body.cliente, body.formaDePagamento, body.valor,
                body.parcelamento, body.status, body.data)
            const resposta = await modelPagamentos.atualizarPagamento(idPagamentos, pagamentoAtualizado)
            res.json(
                {
                    "msg": "Pagamento atualizado com sucesso",
                    "cliente": resposta.dados,
                    "erro": false
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    },

    deletaPagamento: async (req, res) => {
        const idPagamentos = req.params.idPagamentos
        try {
            await modelPagamentos.deletaPagamento(idPagamentos)

            res.json(
                {
                    "msg": "Pagamento deletado com sucesso",
                    "erro": false
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    "msg": error.message,
                    "erro": true
                }
            )
        }
    }

}

export default pagamentosController