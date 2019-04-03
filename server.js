const express = require("express");
const server = express();

server.get("/", (req, res) => {
  res.send("Server Running");
});

const PORT = process.env.PORT || 9000;
server.listen(PORT, () => console.log("API running..."));

module.exports = { server };
