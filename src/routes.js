const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserControllers");

// All registers
routes.get("/registros", UserController.index);
//Register
routes.post("/:name/registrar", UserController.store);
//Validate
routes.put("/:name/validar", UserController.update);

module.exports = routes;
