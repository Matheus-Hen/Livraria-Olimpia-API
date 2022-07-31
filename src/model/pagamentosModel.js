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
        return await dao.pegaPagamentosTodos(Pagamentos)
    }

    pegaPagamentosId = async (idPagamentos) => {
        return await dao.pegaPagamentosId(idPagamentos)
    }

    pegaPagamentosStatus = async (status) => {
        return await dao.pegaPagamentosStatus(status)
    }

    pegaPagamentosForma = async (formaDePagamento) => {
        return await dao.pegaPagamentosForma(formaDePagamento)
    }

    pegaPagamentosData = async (data) => {
        return await dao.pegaPagamentosData(data)
    }

    pegaPagamentosValor = async (valor) => {
        return await dao.pegaPagamentosValor(valor)
    }

    pegaPagamentosParcelamento = async (parcelamento) => {
        return await dao.pegaPagamentosParcelamento(parcelamento)
    }

    pegaPagamentosCliente = async (cliente) => {
        return await dao.pegaPagamentosCliente(cliente)
    }

    inserePagamentos = async (pagamentos) => {
        return await dao.inserePagamentos(pagamentos)
    }

    atualizarPagamento = async (idPagamentos, novoPagamento) => {
        const pagamentoAtual = await this.buscarClienteId(idPagamentos)
        if (pagamentoAtual) {
            const pagamentoAtualizado = {
                "cliente": novoPagamento.cliente || pagamentoAtual.cliente,
                "formaDePagamento": novoPagamento.formaDePagamento || pagamentoAtual.formaDePagamento,
                "valor": novoPagamento.valor || pagamentoAtual.valor,
                "status": novoPagamento.status || pagamentoAtual.status,
                "parcelamento": novoPagamento.parcelamento || pagamentoAtual.parcelamento,
                "data": novoPagamento.data || pagamentoAtual.data,
            }
            return await dao.atualizarPagamento(idPagamentos, pagamentoAtualizado)
        } else {
            throw new Error("Pagamento não encontrado")
        }
    }

    deletaPagamento = async (idPagamentos) => {
        return await dao.deletaPagamento(idPagamentos)
    }
}

export default pagamentos