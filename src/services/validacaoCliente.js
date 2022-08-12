import daoCliente from '../DAO/clienteDAO.js';

const ClienteValidacao = {
  _validaDeleteCliente: async (id, callback) => {
    const cliente = await daoCliente.pegaClientePeloId(id);
    if (cliente == undefined) {
      throw new Error('ID não encontrado');
    } else {
      await callback(id);
      return cliente;
    }
  },

  _validaAtualizar: async (id, callback) => {
    const abobora = await callback(id);
    if (abobora === undefined) {
      throw new Error('Não foi possível atualizar estas informações');
    } else {
      await callback(id);
      return abobora;
    }
  },
};

export default ClienteValidacao;
