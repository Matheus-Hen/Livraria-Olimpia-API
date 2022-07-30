import dao from '../DAO/estoqueDAO.js'
import db from '../database/connect.js'

class Estoque {
    constructor(idEstoque, produto, quantidade, fornecedor,) {
@@ -11,8 +12,8 @@ class Cliente {
        this.senha = senha
    }