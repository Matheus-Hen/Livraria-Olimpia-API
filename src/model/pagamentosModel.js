import dao from '../DAO/pagamentosDAO.js'

class pagamentos {
    constructor(idPagamentos, cliente, formaDePagamento, valor, parcelamento, status, data) {
        this.idPagamentos = idPagamentos;
        this.cliente = cliente;
        this.formaDePagamento = formaDePagamento;
        this.valor = valor;
        this.parcelamento = parcelamento;
        this.status = status;
        this.data = data;
    }

    pegaPagamentosTodos = async (Pagamentos) => {
        try {
            const data = await dao.pegaPagamentosTodos(Pagamentos)
                return {
                    "dados": data,
                    "status": 200
                }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosId = async (idPagamentos) => {
        try {
            const data = await dao.pegaPagamentosId(idPagamentos)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamento de ID ${idPagamentos} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosStatus = async (status) => {
        try {
            const data = await dao.pegaPagamentosStatus(status)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamentos de status ${status} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosForma = async (formaDePagamento) => {
        try {
            const data = await dao.pegaPagamentosForma(formaDePagamento)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Forma de pagamento ${formaDePagamento} não encontrada`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosData = async (data) => {
        try {
            const dado = await dao.pegaPagamentosData(data)

            if (dado) {
                return {
                    "dados": dado,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamento na data ${data} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosValor = async (valor) => {
        try {
            const data = await dao.pegaPagamentosValor(valor)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamento no valor de ${valor} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosParcelamento = async (parcelamento) => {
        try {
            const data = await dao.pegaPagamentosParcelamento(parcelamento)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamentos no número de parcelamentos de ${parcelamento} não encontrados`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    pegaPagamentosCliente = async (cliente) => {
        try {
            const data = await dao.pegaPagamentosCliente(cliente)

            if (data) {
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                return {
                    "mensagem": `Pagamentos do cliente ${cliente} não encontrado`,
                    "status": 404
                }
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    inserePagamentos = async (pagamentos) => {
        try {
            const data = await dao.inserePagamentos(pagamentos)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    atualizarPagamento = async (idPagamentos, novoPagamento) => {
        try {
            const pagamentoAtual = await this.pegaPagamentosId(idPagamentos)
            if (pagamentoAtual) {
                const pagamentoAtualizado = {
                    "cliente": novoPagamento.cliente || pagamentoAtual.cliente,
                    "formaDePagamento": novoPagamento.formaDePagamento || pagamentoAtual.formaDePagamento,
                    "valor": novoPagamento.valor || pagamentoAtual.valor,
                    "status": novoPagamento.status || pagamentoAtual.status,
                    "parcelamento": novoPagamento.parcelamento || pagamentoAtual.parcelamento,
                    "data": novoPagamento.data || pagamentoAtual.data,
                }
                const data = await dao.atualizarPagamento(idPagamentos, pagamentoAtualizado)
                return {
                    "dados": data,
                    "status": 200
                }
            } else {
                throw new Error("Pagamento não encontrado")
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }

    deletaPagamento = async (idPagamentos) => {
        try {
            const data = await dao.deletaPagamento(idPagamentos)
            return {
                "dados": data,
                "status": 200
            }
        } catch (error) {
            return {
                "mensagem": error.message,
                "status": 400
            }
        }
    }
}

export default pagamentos