//import dao from '../DAO/pagamentosDAO.js'

export default class pagamentos {
    constructor(idPagamentos, cliente, formaDePagamento, valor, parcelamento, status, data) {
        this.idPagamentos = idPagamentos;
        this.cliente = cliente;
        this.formaDePagamento = formaDePagamento;
        this.valor = valor;
        this.parcelamento = parcelamento;
        this.status = status;
        this.data = data;
    }
}
