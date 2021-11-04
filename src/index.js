require("dotenv").config();
const express = require("express");
const api = express();
const cors = require("cors");
const routes = require("./routes");

require("./database");
api.use(express.json());
api.use(routes);
api.use(cors());
api.listen(3333, () => console.log("✔ Back-end iniciou!"));
