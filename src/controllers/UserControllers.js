const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();

    return res.json(users);
  },

  async store(req, res) {
    const { name, email, cpf, cellphone, knowledges } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        cpf,
        cellphone,
        knowledges,
        validate: false,
      });

      return res.json(user);
    } catch (err) {
      return res.status(500).json(err.errors);
    }
  },

  async update(req, res) {
    const { name } = await req.params;

    function getValidName(str) {
      if (str.includes("_")) {
        const arr = str.split("_");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        }
        const formatedStr = arr.join(" ");
        return formatedStr;
      }
      return str;
    }

    const validName = getValidName(name);
    try {
      const { updated_at, validate } = await User.findOne({
        raw: true,
        where: {
          name: validName,
        },
      });

      if (validate) {
        return res.status(500).json({
          error: "Usuário já registrou o ponto",
          validate,
          registred_at: Date(updated_at),
        });
      }

      const update = () => {
        User.update(
          { validate: true },
          {
            where: {
              name: validName,
            },
          }
        );
      };
      update();

      return res.status(200).send("Usuário registrou o ponto com sucesso!");
    } catch (err) {
      return res.status(500).send("Something went wrong!");
    }
  },
};
