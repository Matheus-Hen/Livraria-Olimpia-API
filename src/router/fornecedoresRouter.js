import fornecedoresController from '../controller/fornecedoresController.js';

const fornecedores = (app) => {
  app.get('/fornecedores', fornecedoresController.procurarFornecedores);
  app.get(
    '/fornecedores/id/:id',
    fornecedoresController.procurarIDfornecedores,
  );
  app.get(
    '/fornecedores/cnpj/:cnpj',
    fornecedoresController.procurarCNPJfornecedores,
  );
  app.get(
    '/fornecedores/produto/:produtos',
    fornecedoresController.procurarProdutosFornecedores,
  );
  app.get(
    '/fornecedores/endereco/:cep',
    fornecedoresController.procurarCEPfornecedores,
  );

  app.post('/fornecedores', fornecedoresController.criarNewFornecedor);

  app.delete('/fornecedores/id/:id', fornecedoresController.deletaFornecedor);

  app.put('/fornecedores/id/:id', fornecedoresController.atualizaFornecedor);
};

export default fornecedores;
