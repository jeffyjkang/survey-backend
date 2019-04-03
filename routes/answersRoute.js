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
module.exports = router;
