import estoqueController from '../controller/estoqueController.js';

const routerEstoque = (app) => {
  app.get('/estoque', estoqueController.buscarEstoque);
  app.post('/estoque', estoqueController.InsereEstoque);
  app.get('/estoque/id/:idEstoque', estoqueController.buscarQuantidadePorId);
  app.put('/estoque/id/:idEstoque', estoqueController.atualizaEstoque);
  app.delete('/estoque/id/:idEstoque', estoqueController.deletaProdutoEstoque);
};

export default routerEstoque;
