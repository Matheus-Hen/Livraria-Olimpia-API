import express from "express";
import { router } from "./router/router.js";
import fornecedores from "./router/fornecedoresRouter.js"
import db from "./database/connect.js";

const app = express();

app.use(express.json());
fornecedores(app)
app.use(router);
app.listen(3000, () => {
  console.log("Servidor inicializado");
});
