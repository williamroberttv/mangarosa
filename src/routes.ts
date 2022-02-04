import { Router } from "express";
import { UserController } from "./controllers/UserControllers";

const routes = Router();

const controller = new UserController();

// All registers
routes.get("/registros", controller.index);
//Register
routes.post("/:name/registrar", controller.store);
//Validate
routes.put("/:name/validar", controller.update);

export default routes;
