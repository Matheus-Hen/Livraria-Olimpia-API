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
};

export default ClienteValidacao;
