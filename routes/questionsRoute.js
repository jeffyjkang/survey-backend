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
module.exports = router;
