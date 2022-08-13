import Funcionario from '../model/FuncionarioModel.js';
import FuncionarioValidacao from '../services/validacaoFuncionario.js';

const modelFuncionario = new Funcionario();

const FuncionarioController = {
  showFuncionario: async (req, res) => {
    try {
      const showAllFunc = await modelFuncionario.showFunc();

      res.status(showAllFunc.status).json({
        funcionarios: showAllFunc.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({ mensagem: error.message, erro: true });
    }
  },

  showFuncionarioName: async (req, res) => {
    try {
      const nome = req.params.nome;
      const resultadoBusca = await modelFuncionario.showFuncName(nome);

      res.status(resultadoBusca.status).json({
        funcionario: resultadoBusca.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({ mensagem: error.message, erro: true });
    }
  },

  showFuncionarioCPF: async (req, res) => {
    try {
      const cpf = req.params.cpf;
      const resultadoBusca = await modelFuncionario.showFuncCPF(cpf);

      if (resultadoBusca.status === 200) {
        res.status(resultadoBusca.status).json({
          funcionario: resultadoBusca,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resultadoBusca.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({ mensagem: error.message, erro: true });
    }
  },

  showFuncionarioEmail: async (req, res) => {
    try {
      const email = req.params.email;
      const resultadoBusca = await modelFuncionario.showFuncEmail(email);

      if (resultadoBusca.status === 200) {
        res.status(resultadoBusca.status).json({
          funcionario: resultadoBusca,
          erro: false,
        });
      } else {
        res.status(resposta.status).json({
          msg: resultadoBusca.mensagem,
          erro: true,
        });
      }
    } catch (error) {
      res.status(400).json({
        funcionario: error.message,
        erro: true,
      });
    }
  },

  showFuncionarioID: async (req, res) => {
    const id = req.params.id;
    try {
      const resultadoBusca = await modelFuncionario.showFuncID(id);

      if (resultadoBusca.status === 200) {
        res.status(resultadoBusca.status).json({
          msg: resultadoBusca.dados,
          erro: false,
        });
      } else {
        res.status(resultadoBusca.status).json({
          msg: resultadoBusca.mensagem,
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

  AddNewFuncionario: async (req, res) => {
    const body = req.body;
    try {
      const resposta = await modelFuncionario.insertFunc(
        body.nome,
        body.email,
        body.cpf,
        body.telefone,
        body.cargo,
        body.senha,
      );

      if (resposta.status !== 200) throw resposta;
      res.status(resposta.status).json({
        msg: 'Funcionario inserido com sucesso',
        funcionario: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({ msg: error.mensagem, erro: true });
    }
  },

  deleteFunc: async (req, res) => {
    const funcionario = req.params.id;
    try {
      await FuncionarioValidacao._validaDeleteFuncionarios(
        funcionario,
        modelFuncionario.deleteFunc,
      );

      res
        .status(200)
        .json({ msg: 'Funcionario deletado com sucesso', erro: false });
    } catch (error) {
      res.status(404).json({ msg: error.message, erro: true });
    }
  },

  updateFuncionario: async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    try {
      const resposta = await modelFuncionario.updateFunc(
        id,
        body.nome,
        body.email,
        body.cpf,
        body.telefone,
        body.cargo,
        body.senha,
      );
      if (resposta.status !== 200) throw resposta;
      res.status(200).json({
        msg: 'Funcionario atualizado com sucesso',
        cliente: resposta.dados,
        erro: false,
      });
    } catch (error) {
      res.status(400).json({ msg: error.mensagem, erro: true });
    }
  },
};

export default FuncionarioController;
