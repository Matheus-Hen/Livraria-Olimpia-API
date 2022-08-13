import dao from '../DAO/fornecedoresDAO.js';
import Validacoes from '../services/filtroValidacao.js';

class Fornecedores {
  insereFornecedores = async (
    nome,
    cnpj,
    produto,
    email,
    telefone,
    endereco,
    cep,
  ) => {
    try {
      const fornecedor = this.criaFornecedor(
        nome,
        cnpj,
        produto,
        email,
        telefone,
        endereco,
        cep,
      );
      const data = await dao.insereFornecedor(fornecedor);
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

  totalDeFornecedores = async () => {
    try {
      const data = await dao.totalFornecedores();
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

  IDfornecedor = async (id) => {
    try {
      const data = await dao.IDfornecedores(id);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Fornecedor com ID ${id} não encontrado`,
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

  CNPJfornecedor = async (cnpj) => {
    try {
      const data = await dao.CNPJfornecedores(cnpj);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Fornecedor com CNPJ ${cnpj} não encontrado`,
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

  produtosFornecedor = async (produtos) => {
    try {
      const data = await dao.produtosFornecedores(produtos);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Produtos do fornecedor ${produtos} não encontrados`,
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

  CEPfornecedor = async (cep) => {
    try {
      const data = await dao.CEPfornecedores(cep);
      if (data) {
        return {
          dados: data,
          status: 200,
        };
      } else {
        return {
          mensagem: `Fornecedor com CEP ${cep} não encontrado`,
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

  deletaFornecedor = async (id) => {
    try {
      const data = await dao.deletaFornecedores(id);
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

  atualizaFornecedor = async (
    id,
    nome,
    cnpj,
    produto,
    email,
    telefone,
    endereco,
    cep,
  ) => {
    try {
      const newFornecedor = this.criaFornecedor(
        nome,
        cnpj,
        produto,
        email,
        telefone,
        endereco,
        cep,
      );
      const fornecedorVigente = await this.IDfornecedor(id);
      if (fornecedorVigente) {
        const fornecedorAtualizado = {
          id: newFornecedor.id || fornecedorVigente.dados.id,
          nome: newFornecedor.nome || fornecedorVigente.dados.nome,
          cnpj: newFornecedor.cnpj || fornecedorVigente.dados.cnpj,
          produto: newFornecedor.produto || fornecedorVigente.dados.produto,
          email: newFornecedor.email || fornecedorVigente.dados.email,
          telefone: newFornecedor.telefone || fornecedorVigente.dados.telefone,
          endereco: newFornecedor.endereco || fornecedorVigente.dados.endereco,
          cep: newFornecedor.cep || fornecedorVigente.dados.cep,
        };
        const data = await dao.atualizaFornecedor(id, fornecedorAtualizado);
        return {
          dados: data,
          status: 200,
        };
      } else {
        throw new Error('Fornecedor não encontrado');
      }
    } catch (error) {
      return {
        mensagem: error.message,
        status: 400,
      };
    }
  };

  criaFornecedor = (nome, cnpj, produto, email, telefone, endereco, cep) => {
    Validacoes.validaCNPJ(cnpj);
    return {
      nome: nome,
      cnpj: cnpj,
      produto: produto,
      email: email,
      telefone: telefone,
      endereco: endereco,
      cep: cep,
    };
  };
}

export default Fornecedores;
