import db from '../database/connect.js';

const daoEstoque = {
  insereEstoque: (estoque) => {
    const INSERE_ESTOQUE = `
    INSERT INTO ESTOQUE (produto, quantidade, fornecedor)
    VALUES (?, ?, ?)
    `;
    return new Promise((resolve, reject) => {
      db.run(
        INSERE_ESTOQUE,
        estoque.produto,
        estoque.quantidade,
        estoque.fornecedor,
        (error) => {
          if (error) reject(error);
          else resolve(estoque);
        },
      );
    });
  },

  buscarEstoque: () => {
    const PEGA_ESTOQUE = `
        SELECT * FROM ESTOQUE
        `;

    return new Promise((resolve, reject) => {
      db.all(PEGA_ESTOQUE, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  buscarQuantidadeporId: (id) => {
    const PEGA_QUANTIDADE = `
            SELECT * FROM ESTOQUE
            WHERE idEstoque = ?
            `;

    return new Promise((resolve, reject) => {
      db.get(PEGA_QUANTIDADE, id, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },

  atualizarEstoque: (idEstoque, novoProdutoEstoque) => {
    const ATUALIZA_ESTOQUE = `
        UPDATE ESTOQUE
        SET produto = ?, quantidade = ?, fornecedor = ?
        WHERE idEstoque = ?
        `;
    return new Promise((resolve, reject) => {
      db.all(
        ATUALIZA_ESTOQUE,
        novoProdutoEstoque.produto,
        novoProdutoEstoque.quantidade,
        novoProdutoEstoque.fornecedor,
        idEstoque,
        (error) => {
          if (error) reject(error);
          else resolve(novoProdutoEstoque);
        },
      );
    });
  },

  removeProduto: (id) => {
    const DELETA_PRODUTO = `
        DELETE FROM ESTOQUE
        WHERE idEstoque = ?
        `;
    return new Promise((resolve, reject) => {
      db.run(DELETA_PRODUTO, id, (error, row) => {
        if (error) reject(error);
        else resolve(row);
      });
    });
  },
};

export default daoEstoque;
