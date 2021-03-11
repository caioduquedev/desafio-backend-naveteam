const express = require("express");
const router = express.Router();
const Project = require("../models/project");

// (Index) Rota para listagem dos Projetos
router.get("/projects", async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

// (Show) Rota para detalhar um projeto
router.get("/projects/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const project = await Project.findById(id);
    if (!id) {
      return res.status(404).send();
    }
    res.status(200).json(project);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});

// (Store) Rota de Criação de Projeto
router.post("/project", async (req, res) => {
  try {
    const data = req.body;
    const newProj = new Project(data);
    await newProj.save();
    res.status(201).json(newProj);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
});


module.exports = router;