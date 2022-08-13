import daoPagamentos from '../DAO/pagamentosDAO.js';

const PagamentosValidacao = {
  _validaDeletePagamentos: async (idPagamentos, callback) => {
    const pagamento = await daoPagamentos.pegaPagamentosId(idPagamentos);
    if (pagamento == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(idPagamentos);
      return pagamento;
    }
  },
};

export default PagamentosValidacao;
