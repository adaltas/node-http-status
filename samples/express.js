// node samples/express.js
import express from "express";
import redis from "redis";
import status from "http-status";

// New Express HTTP server
const app = express.createServer();
// Register a route
app.get("/", (req, res) => {
  const client = redis.createClient();
  client.ping((err, msg) => {
    if (err) {
      return res.send(status.INTERNAL_SERVER_ERROR);
    }
    res.send(msg, status.OK);
  });
});
// Start the HTTP server
app.listen(3000);
