import pagamentos from '../model/pagamentosModel.js';
import PagamentosValidacao from '../services/validacaoPagamento.js';

const modelPagamentos = new pagamentos();

const pagamentosController = {
  pegaPagamentosTodos: async (req, res) => {
    try {
      const resposta = await modelPagamentos.pegaPagamentosTodos();

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosId: async (req, res) => {
    const idPagamentos = req.params.idPagamentos;
    try {
      const resposta = await modelPagamentos.pegaPagamentosId(idPagamentos);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosStatus: async (req, res) => {
    const status = req.params.status;
    try {
      const resposta = await modelPagamentos.pegaPagamentosStatus(status);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosForma: async (req, res) => {
    const formaDePagamento = req.params.formaDePagamento;
    try {
      const resposta = await modelPagamentos.pegaPagamentosForma(
        formaDePagamento,
      );
      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosData: async (req, res) => {
    const data = req.params.data;
    try {
      const resposta = await modelPagamentos.pegaPagamentosData(data);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosValor: async (req, res) => {
    const valor = req.params.valor;
    try {
      const resposta = await modelPagamentos.pegaPagamentosValor(valor);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosParcelamento: async (req, res) => {
    const parcelamento = req.params.parcelamento;
    try {
      const resposta = await modelPagamentos.pegaPagamentosParcelamento(
        parcelamento,
      );

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  pegaPagamentosCliente: async (req, res) => {
    const cliente = req.params.cliente;
    try {
      const resposta = await modelPagamentos.pegaPagamentosCliente(cliente);

      if (resposta.status === 200) {
        res.status(resposta.status).json({
          pagamentos: resposta.dados,
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

  inserePagamentos: async (req, res) => {
    const body = req.body;
    try {
      const resposta = await modelPagamentos.inserePagamentos(
        body.cliente,
        body.formaDePagamento,
        body.valor,
        body.parcelamento,
        body.status,
        body.data,
      );
      if (resposta.status !== 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'Pagamento inserido com sucesso',
        pagamentos: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(error.status).json({
        msg: error.mensagem,
        erro: true,
      });
    }
  },

  atualizarPagamento: async (req, res) => {
    const idPagamentos = req.params.idPagamentos;
    const body = req.body;
    try {
      const resposta = await modelPagamentos.atualizarPagamento(
        idPagamentos,
        body.cliente,
        body.formaDePagamento,
        body.valor,
        body.parcelamento,
        body.status,
        body.data,
      );
      if (resposta.status !== 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'Pagamento atualizado com sucesso',
        cliente: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(error.status).json({
        msg: error.mensagem,
        erro: true,
      });
    }
  },

  deletaPagamento: async (req, res) => {
    const idPagamentos = req.params.id;
    try {
      await PagamentosValidacao._validaDeletePagamentos(
        idPagamentos,
        modelPagamentos.deletaPagamento,
      );
      res.json({
        msg: 'Pagamento deletado com sucesso',
        erro: false,
      });
    } catch (error) {
      res.status(400).json({
        msg: error.message,
        erro: true,
      });
    }
  },
};

export default pagamentosController;
