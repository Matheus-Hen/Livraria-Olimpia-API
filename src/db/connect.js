import {open} from "sqlite";
import sql from 'sqlite3'

export default function connect() {
   
    sql.verbose()
    const db = new sql.Database('olimpia.db',(err)=>{
        console.log("Acessou");
    });
    
}
