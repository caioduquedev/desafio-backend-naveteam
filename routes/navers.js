const express = require("express");
const router = express.Router();
const Naver = require("../models/naver");

// (Index) Rota para listagem dos Navers.
router.get("/navers", async (req, res) => {
  try {
    const navers = await Naver.find({});
    res.status(200).json(navers);
  } catch (error) {}
  console.log(error);
  res.status(500).send();
});

// (Show) Rota para detalhar informações de um único naver através de seu identificador
router.get("/navers/:id", async (req, res) => {
  try {
    const id = req.body.id;
    const naver = await Naver.findById(id);

    if (!naver) {
      return res.status(404).send();
    }
    res.status(200).json(naver);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

// (Store) Rota de Criação de Naver
router.post("/naver", async (req, res) => {
  try {
    const body = req.body;
    const newNaver = new Naver(body);
    await newNaver.save();
    res.status(201).json(newNaver);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
