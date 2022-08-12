import Fornecedores from '../model/fornecedoresModel.js';

const modelFornecedor = new Fornecedores();

const fornecedoresController = {
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

      if (resposta.status === 200) {
        res
          .status(resposta.status)
          .json({
            msg: 'Fornecedor inserido',
            cliente: resposta.dados,
            erro: false,
          });
      } else {
        res
          .status(resposta.status)
          .json({ msg: resposta.mensagem, erro: true });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message, erro: true });
    }
  },

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
          mensagem: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(500).json({ mensagem: error.message, erro: true });
    }
  },

  procurarIDfornecedores: async (req, res) => {
    try {
      const id = req.params.id;
      const resposta = await modelFornecedor.IDfornecedor(id);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          mensagem: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message,
        erro: true,
      });
    }
  },

  procurarProdutosFornecedores: async (req, res) => {
    try {
      const produtos = req.params.produtos;
      const resposta = await modelFornecedor.produtosFornecedor(produtos);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          mensagem: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message,
        erro: true,
      });
    }
  },

  procurarCEPfornecedores: async (req, res) => {
    try {
      const cep = req.params.cep;
      const resposta = await modelFornecedor.CEPfornecedor(cep);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          mensagem: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message,
        erro: true,
      });
    }
  },

  procurarCNPJfornecedores: async (req, res) => {
    try {
      const cnpj = req.params.cnpj;
      const resposta = await modelFornecedor.CNPJfornecedor(cnpj);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          fornecedores: resposta.dados,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          mensagem: resposta.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(500).json({
        mensagem: error.message,
        erro: true,
      });
    }
  },

  deletaFornecedor: async (req, res) => {
    const id = req.params.id;
    try {
      await modelFornecedor.deletaFornecedor(id);
      res.json({ msg: 'Fornecedor deletado', erro: false });
    } catch (error) {
      res.json({ msg: error.message, erro: true });
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
      if (resposta.status !== 200) throw resposta;
      res
        .status(resposta.status)
        .json({
          msg: 'Fornecedor atualizado',
          fornecedor: resposta.dados,
          erro: false,
        });
    } catch (error) {
      res.status(400).json({ msg: error.mensagem, erro: true });
    }
  },
};

export default fornecedoresController;
