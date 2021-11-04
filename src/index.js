const express = require("express");
const api = express();
const routes = require("./routes");

api.use(routes);
api.listen(3333, () => console.log("✔ Back-end iniciou!"));
