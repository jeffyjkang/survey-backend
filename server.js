const express = require("express");
const server = express();
// import routes
const surveys = require("./routes/surveysRoute");
const questions = require("./routes/questionsRoute");
const answers = require("./routes/answersRoute");
// for parsing
server.use(express.json());
// have server use routes for respective endpoints
server.use("/surveys", surveys);
server.use("/questions", questions);
server.use("/answers", answers);
// init to make sure server is up
server.get("/", (req, res) => {
  res.send("<h1>Server Running<h1>");
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));

module.exports = { server };
