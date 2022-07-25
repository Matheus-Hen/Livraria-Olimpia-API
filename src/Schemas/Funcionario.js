import mongoose from "mongoose";


const Funcionario = new mongoose.Schema({
    Nome:{
        type: String,
        required: true
    },
    Telefone:{
        type: String,
        required: true
    }
});

const dbFunc = mongoose.model("Funcionario", Tips)
export default dbFunc 