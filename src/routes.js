const express = require("express");
const routes = express.Router();
const User = require("./models/User");

// All registers routes
routes.get("/registros", (request, response) => {
  return response.json({ "Lista de Registros": Registro });
});

// Users routes
routes.post("/:name/registrar", async (req, res) => {
  const { name, email, cpf, cellphone, knowledges, validate } = req.body;
  console.log(req.body);
  const user = await User.create({
    name,
    email,
    cpf,
    cellphone,
    knowledges,
    validate,
  });

  return res.json(user);
});

routes.get("/:name/validar", (request, response) => {
  const { name } = request.params;
  return response.json({ Usuário: name });
});
routes.put("/:name/validar", () => console.log("Rota para atualizar"));

module.exports = routes;
