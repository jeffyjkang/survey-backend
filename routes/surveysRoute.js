const express = require("express");
const router = express.Router();
const surveysDb = require("../helpers/surveysDb");

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
module.exports = router;
