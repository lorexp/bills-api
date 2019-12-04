const express = require("express");
const { bill } = require("../app/models");

const app = express();

app.use(express.json());

app.get("/bills", async (req, res) => {
  try {
    const bills = await bill.findAll();
    res.send(bills);
  } catch (e) {
    res.send(e);
  }
});

app.get("/bill/:id", async (req, res) => {
  try {
    const Bill = await bill.findByPk(req.params.id);
    res.send(Bill);
  } catch (e) {
    res.send(e);
  }
});

app.post("/bill", async (req, res) => {
  try {
    const Bill = await bill.create(req.body);
    res.json(Bill);
  } catch (e) {
    res.send(e);
  }
});

app.delete("/bill/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const deleted = await bill.destroy({
      where: {
        id
      }
    });
    res.json(deleted);
  } catch (e) {
    res.send(e);
  }
});

app.put("/bill/:id", (req, res) => {
  try {
    const id = req.params.id;
    const updated = bill.update(req.body, {
      where: {
        id
      }
    });
    res.json(updated);
  } catch (e) {
    res.send(e);
  }
});

app.listen(3000, () => console.log("Listening..."));
