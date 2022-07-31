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

    pegaPagamentosTodos = async () => {
        return await dao.pegaPagamentosTodos()
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

    deletaPagamento = async (idPagamentos) => {
        return await dao.deletaPagamento(idPagamentos)
    }
}

export default pagamentos