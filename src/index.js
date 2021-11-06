const express = require("express");
const api = express();
const cors = require("cors");
const routes = require("./routes");

require("./database");
api.use(express.json());
api.use(routes);
api.use(cors());
api.listen(process.env.PORT, () =>
  console.log(`✔ application running on port ${process.env.PORT}`)
);
