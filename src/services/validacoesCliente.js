import seteDigitos from "./filtroDeValidacao"
import verificaArroba from "./filtroDeValidacao"
import validaCPF from "./filtroDeValidacao"

//valida senha
const seteDigitos = (senha)=>{
    if(!seteDigitos(senha)){
        throw new Error("A senha precisa ter 7 ou mais caracteres")
    }
}

//valida email 
const verificaArroba = (email)=>{
    if(!verificaArroba(email)){
        return email
    }else{
        throw new Error("Algo está faltando em seu email, digite corretamente.")
    }
}

//valida cpf
const validaCPF = (cpf) => {
    if(!validaCPF, (cpf)){
        return cpf
    }else{
        throw new Error("Verifique o campo do cpf")
    }
}
