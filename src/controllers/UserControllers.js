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
      if (str.includes("-")) {
        const arr = str.split("-");
        console.log(arr);
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
      const user = await User.findOne({
        raw: true,
        where: {
          name: validName,
        },
      });

      const validateStatus = true;

      if (user.validate) {
        return res.status(500).send("Usuário já validado");
      }

      const update = () => {
        User.update(
          { validate: validateStatus },
          {
            where: {
              name: validName,
            },
          }
        );
      };
      update();

      return res.status(200).send("Usuário validado com sucesso!");
    } catch (err) {
      return res.status(500).send("Something went wrong!");
    }
  },
};
