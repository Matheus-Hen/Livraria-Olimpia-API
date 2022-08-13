import db from '../database/connect.js';

const daoFornecedores = {
  insereFornecedor: (fornecedor) => {
    const INSERE_FORNECEDORES = `
    INSERT INTO FORNECEDORES (id, nome, cnpj, produto, email, telefone, endereco, cep)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    return new Promise((resolve, reject) => {
      db.run(
        INSERE_FORNECEDORES,
        fornecedor.id,
        fornecedor.nome,
        fornecedor.cnpj,
        fornecedor.produto,
        fornecedor.email,
        fornecedor.telefone,
        fornecedor.endereco,
        fornecedor.cep,
        (error) => {
          if (error) reject(error);
          else resolve(fornecedor);
        },
      );
    });
  },

  totalFornecedores: () => {
    const PEGA_TOTAL_FORNECEDORES = `
      SELECT * FROM FORNECEDORES
      `;
    return new Promise((resolve, reject) => {
      db.all(PEGA_TOTAL_FORNECEDORES, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  IDfornecedores: (id) => {
    const PEGA_ID_FORNECEDORES = `
    SELECT * FROM FORNECEDORES
    WHERE id = ?
    `;
    return new Promise((resolve, reject) => {
      db.get(PEGA_ID_FORNECEDORES, id, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  CNPJfornecedores: (cnpj) => {
    const PEGA_CNPJ_FORNECEDORES = `
    SELECT * FROM FORNECEDORES
    WHERE cnpj = ?
    `;
    return new Promise((resolve, reject) => {
      db.get(PEGA_CNPJ_FORNECEDORES, cnpj, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  produtosFornecedores: (produtos) => {
    const PEGA_PRODUTOS_FORNECEDORES = `
    SELECT * FROM FORNECEDORES
    WHERE produto = ?
    `;
    return new Promise((resolve, reject) => {
      db.all(PEGA_PRODUTOS_FORNECEDORES, produtos, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  CEPfornecedores: (cep) => {
    const PEGA_CEP_FORNECEDORES = `
    SELECT * FROM FORNECEDORES
    WHERE cep = ?
    `;
    return new Promise((resolve, reject) => {
      db.all(PEGA_CEP_FORNECEDORES, cep, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  deletaFornecedores: (id) => {
    const DELETA_FORNECEDORES = `
  DELETE FROM FORNECEDORES
  WHERE id = ?
  `;
    return new Promise((resolve, reject) => {
      db.run(DELETA_FORNECEDORES, id, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  atualizaFornecedor: (id, newFornecedor) => {
    const ATT_FORNECEDORES = `
  UPDATE FORNECEDORES
  SET nome = ?, cnpj = ?, produto = ?, email = ?, telefone = ?, endereco = ?, cep = ?
  WHERE id = ?
  `;

    return new Promise((resolve, reject) => {
      db.run(
        ATT_FORNECEDORES,
        newFornecedor.nome,
        newFornecedor.cnpj,
        newFornecedor.produto,
        newFornecedor.email,
        newFornecedor.telefone,
        newFornecedor.endereco,
        newFornecedor.cep,
        id,
        (error) => {
          if (error) reject(error);
          else resolve(newFornecedor);
        },
      );
    });
  },
};

export default daoFornecedores;
