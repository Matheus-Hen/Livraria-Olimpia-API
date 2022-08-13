import daoFornecedores from '../DAO/fornecedoresDAO.js';

const FornecedorValidacao = {
  _validaDeleteFornecedor: async (id, callback) => {
    const fornecedores = await daoFornecedores.IDfornecedores(id);
    if (fornecedores == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return fornecedores;
    }
  },
};

export default FornecedorValidacao;
