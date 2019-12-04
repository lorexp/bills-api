const express = require("express");
const { bill } = require("../app/models");

const app = express();

app.use(express.json());

app.get("/bills", async (req, res) => {
  const bills = await bill.findAll();
  res.send(bills);
});

app.get("/bill/:id", async (req, res) => {
  const Bill = await bill.findByPk(req.params.id);
  res.send(Bill);
});

app.post("/bill", async (req, res) => {
  const Bill = await bill.create(req.body);
  res.json(Bill);
});

app.delete("/bill/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = await bill.destroy({
    where: {
      id
    }
  });
  res.json(deleted);
});

app.put("/bill/:id", (req, res) => {
  const id = req.params.id;
  const updated = bill.update(req.body, {
    where: {
      id
    }
  });
  res.json(updated);
});

app.listen(3000, () => console.log("Listening..."));
