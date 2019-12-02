const pool = require("./connection");

const getBills = async res => {
  await pool.query("SELECT * FROM bill", (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

const getBill = async (res, id) => {
  await pool.query("SELECT * FROM bill WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};

const setBill = async (res, data, descricao, valor) => {
  await pool.query("INSERT INTO bill (data, descricao, valor) VALUES ($1, $2, $3)", [data, descricao, valor], (error, results) => {
    if (error) {
      throw error;
    }

    res.send("Conta inserida");
  });
};

const deleteBill = async (res, id) => {
  await pool.query("DELETE FROM bill WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);

    res.send(`Conta com id ${id} deletado com sucesso`);
  });
};

const updateBill = async (res, id, data, descricao, valor) => {
  await pool.query(
    "UPDATE bill SET data = $1, descricao = $2, valor = $3 where id = $4",
    [data, descricao, valor, id],
    (error, results) => {
      if (error) {
        throw error;
      }

      res.send(`Conta com id ${id} atualizada com sucesso`);
    }
  );
};

module.exports = { getBills, getBill, setBill, deleteBill, updateBill };
