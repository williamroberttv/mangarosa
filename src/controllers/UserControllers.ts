import { Request, Response } from "express";
import { User } from "../models/User";
import { handleKnowledgesValidation } from "../utils/knowledgesValidation";
import { getValidName } from "../utils/nameValidation";

export class UserController {
  async index(req: Request, res: Response) {
    try {
      const users = await User.findAll();
      return res.json(users);
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async store(req: Request, res: Response) {
    const { name, cpf, email, cellphone, knowledges } = req.body;
    const validateKnowledges = handleKnowledgesValidation(knowledges);
    const formatedKnowledges = knowledges.map((item: string) =>
      item.toLowerCase()
    );
    if (validateKnowledges) {
      return res.status(500).send(validateKnowledges);
    }
    try {
      const user: User = await User.create({
        name,
        email,
        cellphone,
        cpf,
        knowledges: formatedKnowledges,
        validated: false,
      });
      return res.json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  async update(req: Request, res: Response) {
    const { name } = req.params;
    const validName = getValidName(name.toLowerCase());

    try {
      const user = await User.findOne({
        raw: true,
        where: {
          name: validName,
        },
      });
      if (user?.validated) {
        return res.status(500).send("Usuário já validado.");
      }

      if (!user) {
        return res.status(500).send("Usuário não encontrado.");
      }

      const update = () => {
        User.update(
          { validated: true },
          {
            where: {
              name: validName,
            },
          }
        );
      };
      update();

      return res.status(200).json({ user });
    } catch (err) {
      return res.status(500).send(err);
    }
  }
}
