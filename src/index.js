const express = require("express");
const { getBills, getBill, setBill, deleteBill, updateBill } = require("./database/crud");

const app = express();

app.use(express.json());

app.get("/bills", (req, res) => {
  getBills(res);
});

app.get("/bill/:id", (req, res) => {
  const id = req.params.id;
  getBill(res, id);
});

app.post("/bill", (req, res) => {
  const { data, descricao, valor } = req.body;
  setBill(res, data, descricao, valor);
});

app.delete("/bill/:id", (req, res) => {
  const id = req.params.id;
  deleteBill(res, id);
});

app.put("/bill/:id", (req, res) => {
  const id = req.params.id;
  const { data, descricao, valor } = req.body;
  updateBill(res, id, data, descricao, valor);
});

app.listen(3000, () => console.log("Listening..."));
