import FuncionarioController from "../controller/FuncionarioController.js";

export const routerFuncionario = (app)=> {

    app.get('/funcionario', FuncionarioController.showFuncionario)
    app.get('/funcionario/nome/:nome', FuncionarioController.showFuncionarioName)
    app.get('/funcionario/cpf/:cpf', FuncionarioController.showFuncionarioCPF)
    app.get('/funcionario/email/:email', FuncionarioController.showFuncionarioEmail)
    app.get('/funcionario/id/:id', FuncionarioController.showFuncionarioID)

    app.post('/funcionario', FuncionarioController.AddNewFuncionario)

    app.delete('/funcionario/id/:id', FuncionarioController.deleteFunc)

    app.put('/funcionario/id/:id', FuncionarioController.updateFuncionario)
}