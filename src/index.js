const express = require("express");

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: "Back-end" });
});

app.listen(3333, () => {
  console.log("✔ Back-end iniciou!");
});
