import estoqueModel from "../model/clienteModel.js";


const clienteController = {

    buscarClientes : async (req, res)=> {
        const modelCliente = new Cliente()
        const todosClientes = await modelCliente.buscarClientesTodos()

        res.json({
            "clientes": todosClientes,
            "erro": false
        })
    },