import Fornecedores from '../model/fornecedoresModel.js';
import FornecedorValidacao from '../services/validacaoFornecedor.js';

const modelFornecedor = new Fornecedores();

const fornecedoresController = {
  procurarFornecedores: async (req, res) => {
    try {
      const resposta = await modelFornecedor.totalDeFornecedores();

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  procurarIDfornecedores: async (req, res) => {
    const id = req.params.id;
    try {
      const resposta = await modelFornecedor.IDfornecedor(id);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  procurarProdutosFornecedores: async (req, res) => {
    const produtos = req.params.produtos;
    try {
      const resposta = await modelFornecedor.produtosFornecedor(produtos);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  procurarCEPfornecedores: async (req, res) => {
    const cep = req.params.cep;
    try {
      const resposta = await modelFornecedor.CEPfornecedor(cep);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  procurarCNPJfornecedores: async (req, res) => {
    const cnpj = req.params.cnpj;
    try {
      const resposta = await modelFornecedor.CNPJfornecedor(cnpj);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  criarNewFornecedor: async (req, res) => {
    const body = req.body;
    try {
      const resposta = await modelFornecedor.insereFornecedores(
        body.nome,
        body.cnpj,
        body.produto,
        body.email,
        body.telefone,
        body.endereco,
        body.cep,
      );

      if (resposta.status !== 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'Fornecedor inserido com sucesso!',
        cliente: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  deletaFornecedor: async (req, res) => {
    const fornecedor = req.params.id;
    try {
      await FornecedorValidacao._validaDeleteFornecedor(
        fornecedor,
        modelFornecedor.deletaFornecedor,
      );
      res.json({
        msg: 'Fornecedor deletado com sucesso',
        erro: false,
      });
    } catch (error) {
      res.status(404).json({
        msg: error.message,
        erro: true,
      });
    }
  },

  atualizaFornecedor: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const resposta = await modelFornecedor.atualizaFornecedor(
        id,
        body.nome,
        body.cnpj,
        body.produto,
        body.email,
        body.telefone,
        body.endereco,
        body.cep,
      );
      if (resposta.status != 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'Fornecedor atualizado',
        fornecedor: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(error.status).json({
        msg: error.mensagem,
        erro: true,
      });
    }
  },
};

export default fornecedoresController;
