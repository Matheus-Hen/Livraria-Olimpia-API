import daoEstoque from '../DAO/estoqueDAO.js';

const EstoqueValidacao = {
  _validaDeleteEstoque: async (id, callback) => {
    const estoque = await daoEstoque.buscarQuantidadeporId(id);
    if (estoque == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return estoque;
    }
  },
};

export default EstoqueValidacao;
