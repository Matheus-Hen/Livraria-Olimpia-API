import fornecedoresController from '../Controller/fornecedoresController.js'

const fornecedores = (app)=> {
  app.get('/fornecedores', fornecedoresController.procurarFornecedores) //total
  app.get('/fornecedores/id/:id', fornecedoresController.procurarIDfornecedores) //id
  app.get('/fornecedores/cnpj/:cnpj', fornecedoresController.procurarCNPJfornecedores) //cnpj
  app.get('/fornecedores/produto/:produtos', fornecedoresController.procurarProdutosFornecedores) //produtos
  app.get('/fornecedores/endereco/:cep', fornecedoresController.procurarCEPfornecedores) //endereços

  app.post('/fornecedores', fornecedoresController.criarNewFornecedor) //criar

  app.delete('/fornecedores/id/:id', fornecedoresController.deletaFornecedor) //deleta

  app.put('/fornecedores/id/:id', fornecedoresController.atualizaFornecedor) //atualiza
}

export default fornecedores