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

  _validaAtualizar: async (id, callback, newBody) => {
    const object = await callback(id, newBody);
    if (object === undefined) {
      throw new Error('Não foi possível atualizar estas informações');
    } else {
      return object;
    }
  },
};

export default EstoqueValidacao;
