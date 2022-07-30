import clienteController from "../controller/clienteController.js";

const routerCliente = (app)=> {

    app.get('/clientes', clienteController.buscarClientes)
    app.get('/clientes/nome/:nome', clienteController.buscarClientePeloNome)
    app.get('/clientes/cpf/:cpf', clienteController.buscarClientePeloCPF)
    app.get('/clientes/email/:email', clienteController.buscarClientePeloEmail)
    app.get('/clientes/id/:id', clienteController.buscarClientePeloID)
}

export default routerCliente