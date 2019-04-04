const express = require("express");
const router = express.Router();
const answersDb = require("../helpers/answersDb");

// get route
router.get("/", async (req, res) => {
  try {
    const answers = await answersDb.get();
    res.status(200).json(answers);
  } catch (error) {
    res
      .status(500)
      .json({ error: "there was an error retrieving the answers" });
  }
});

// post route
router.post("/", async (req, res) => {
  const { yes, no, questionsId } = req.body;
  if (!questionsId) {
    return res
      .status(400)
      .json({ error: "questionsId is required to connect to questions" });
  }
  if (yes > 1 || no > 1) {
    return res
      .status(400)
      .json({ error: "answer can not be incremented by more than 1" });
  }
  if (yes === 1 && no === 1) {
    return res
      .status(400)
      .json({ error: "answer can only have one field modified" });
  }
  try {
    const answer = await answersDb.insert(req.body);
    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ error: "there was an error submitting the answer" });
  }
});

module.exports = router;
