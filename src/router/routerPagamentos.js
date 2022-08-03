import pagamentosController from "../controller/pagamentosController.js";

const Pagamentos = (app) => {

    app.get('/pagamentos', pagamentosController.pegaPagamentosTodos)
    app.get('/pagamentos/idPagamentos/:idPagamentos', pagamentosController.pegaPagamentosId)
    app.get('/pagamentos/status/:status', pagamentosController.pegaPagamentosStatus)
    app.get('/pagamentos/formaDePagamento/:formaDePagamento', pagamentosController.pegaPagamentosForma)
    app.get('/pagamentos/data/:data', pagamentosController.pegaPagamentosData)
    app.get('/pagamentos/valor/:valor', pagamentosController.pegaPagamentosValor)
    app.get('/pagamentos/parcelamento/:parcelamento', pagamentosController.pegaPagamentosParcelamento)
    app.get('/pagamentos/cliente/:cliente', pagamentosController.pegaPagamentosCliente)
    app.post('/pagamentos', pagamentosController.inserePagamentos)
    app.put('/pagamentos/idPagamentos/:idPagamentos', pagamentosController.atualizarPagamento)
    app.delete('/pagamentos/idPagamentos/:idPagamentos', pagamentosController.deletaPagamento)
}

export default Pagamentos