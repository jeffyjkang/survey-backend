const express = require("express");
const router = express.Router();
const questionsDb = require("../helpers/questionsDb");

// get route
router.get("/", async (req, res) => {
  try {
    const questions = await questionsDb.get();
    res.status(200).json(questions);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the questions" });
  }
});

// get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const question = await questionsDb.get(id);
    if (!question) {
      res
        .status(404)
        .json({ error: "the question with the specified id does not exist" });
    } else {
      res.status(200).json(question);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "thre was an error retrieving the question" });
  }
});

// post route
router.post("/", async (req, res) => {
  const { question, surveysId } = req.body;
  if (!question) {
    return res
      .status(400)
      .json({ error: "question field is required, please input a question" });
  }
  if (!surveysId) {
    return res
      .status(400)
      .json({ error: "surveysId is required to connect to survey" });
  }
  try {
    const question = await questionsDb.insert(req.body);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a question" });
  }
});

module.exports = router;
