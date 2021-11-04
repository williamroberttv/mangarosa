const express = require("express");
const routes = express.Router();

// All registers routes
routes.get("/registros", (request, response) => {
  return response.json({ "Lista de Registros": Registro });
});

// Users routes
routes.post("/:name/registrar", () => console.log("Registra"));
routes.get("/:name/validar", (request, response) => {
  const { name } = request.params;
  return response.json({ Usuário: name });
});
routes.put("/:name/validar", () => console.log("Rota para atualizar"));

module.exports = routes;
