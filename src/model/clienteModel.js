import dao from '../DAO/clienteDAO.js';
import Validacoes from '../services/filtroValidacao.js';

class Cliente {
  inserirCliente = async (nome, email, cpf, telefone, cep, senha) => {
    try {
      const cliente = this.criaCliente(nome, email, cpf, telefone, cep, senha);
      if (cliente == false) throw error;
      const data = await dao.insereCliente(cliente);
      return {
        dados: data,
        status: 200,
      };
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  removerCliente = async (id) => {
    try {
      const data = await dao.removeCliente(id);
      return {
        dados: data,
        status: 200,
      };
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  buscarClientesTodos = async () => {
    try {
      const data = await dao.pegaTodosClientes();
      return {
        dados: data,
        tamanho: data.length,
        status: 200,
      };
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  buscarClienteId = async (id) => {
    try {
      const data = await dao.pegaClientePeloId(id);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Usuário de ID ${id} não encontrado`,
          status: 404,
        };
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  buscarClienteNome = async (nome) => {
    try {
      const data = await dao.pegaClientePeloNome(nome);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Usuário de nome ${nome} não encontrado`,
          status: 404,
        };
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  buscarClienteEmail = async (email) => {
    try {
      const data = await dao.pegaClientePeloEmail(email);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Usuário de email ${email} não encontrado`,
          status: 404,
        };
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  buscarClienteCPF = async (cpf) => {
    try {
      const data = await dao.pegaClientePeloCPF(cpf);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Usuário de CPF ${cpf} não encontrado`,
          status: 404,
        };
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  atualizarCliente = async (id, nome, email, cpf, telefone, senha, cep) => {
    try {
      const novoCliente = this.criaCliente(
        nome,
        email,
        cpf,
        telefone,
        senha,
        cep,
      );
      const clienteAtual = await this.buscarClienteId(id);
      if (clienteAtual) {
        const clienteAtualizado = {
          nome: novoCliente.nome || clienteAtual.dados.nome,
          email: novoCliente.email || clienteAtual.dados.email,
          cpf: novoCliente.cpf || clienteAtual.dados.cpf,
          telefone: novoCliente.telefone || clienteAtual.dados.telefone,
          cep: novoCliente.cep || clienteAtual.dados.cep,
          senha: novoCliente.senha || clienteAtual.dados.senha,
        };
        const data = await dao.atualizarCliente(id, clienteAtualizado);
        return {
          dados: data,
          status: 200,
        };
      } else {
        throw new Error('Cliente não encontrado');
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  criaCliente = (nome, email, cpf, telefone, senha, cep) => {
    Validacoes.validaEmail(email);
    Validacoes.validaSenha(senha);
    Validacoes.validaCPF(cpf);

    return {
      nome: nome,
      email: email,
      cpf: cpf,
      telefone: telefone,
      senha: senha,
      cep: cep,
    };
  };
}

export default Cliente;
