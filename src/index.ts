import express from "express";
import "dotenv/config";
import cors from "cors";
import routes from "./routes";
import "./database";

const api = express();

api.use(express.json());
api.use(routes);
api.use(cors());

api.listen(process.env.PORT, () =>
  console.log(`✔ application running on port ${process.env.PORT}`)
);
