const express = require('express');

const server = express();

server.use(express.json());

server.get("/api", (req, res) => {
  res.status(200).json({ test: "IT's WORKING!"})
})

const port = process.env.PORT || 8888;
server.listen(port, () => console.log(`***Server listening on port: ${port}***`))