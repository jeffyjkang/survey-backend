const express = require("express");
const router = express.Router();
const surveysDb = require("../helpers/surveysDb");
const questionsDb = require("../helpers/questionsDb");

// get route

router.get("/", async (req, res) => {
  try {
    const surveys = await surveysDb.get();
    res.status(200).json(surveys);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the surveys" });
  }
});

// get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const survey = await surveysDb.get(id);
    if (!survey) {
      res
        .status(404)
        .json({ error: "the survey with the specified id does not exist" });
    } else {
      const questions = await questionsDb.get().where("surveysId", id);
      survey.questions = questions;
      res.status(200).json(survey);
    }
  } catch (error) {
    res.status(500).json({ error: "there was an error retrieving the survey" });
  }
});

// post route
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res
      .status(400)
      .json({ error: "title is a required field, please input title" });
  }
  try {
    const survey = await surveysDb.insert(req.body);
    res.status(201).json(survey);
  } catch (error) {
    res.status(500).json({ error: "there was an error creating a survey" });
  }
});
module.exports = router;
