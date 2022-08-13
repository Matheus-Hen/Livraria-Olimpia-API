import daoFuncionario from '../DAO/funcionarioDAO.js';

const FuncionarioValidacao = {
  _validaDeleteFuncionarios: async (id, callback) => {
    const funcionario = await daoFuncionario.showFunc_ID(id);
    if (funcionario == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return funcionario;
    }
  },
};

export default FuncionarioValidacao;
