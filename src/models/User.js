const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: {
              msg: "O campo name está vazio.",
            },
            len: {
              args: [0, 100],
              msg: "O campo name deve ter no máximo 100 caracteres.",
            },
          },
        },
        email: {
          type: DataTypes.STRING,
          validate: {
            isEmail: {
              msg: "O email enviado não é válido.",
            },
            notEmpty: {
              msg: "O campo email é obrigatório.",
            },
            len: {
              args: [0, 100],
              msg: "O campo email deve ter no máximo 100 caracteres.",
            },
          },
        },
        cpf: {
          type: DataTypes.STRING,
          validate: {
            is: {
              args: /^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/,
              msg: "O cpf não é válido.",
            },
            notEmpty: {
              msg: "O campo cpf é obrigatório.",
            },
            len: {
              args: [14, 14],
              msg: "O campo cpf deve ter 14 caracteres.",
            },
          },
        },
        cellphone: {
          type: DataTypes.STRING,
          validate: {
            is: /^(?:\()[0-9]{2}(?:\))\s?[0-9]{4,5}(?:-)[0-9]{4}$/,
          },
        },
        validate: DataTypes.BOOLEAN,
        knowledges: {
          type: DataTypes.ARRAY(
            DataTypes.ENUM([
              "Git",
              "React",
              "PHP",
              "NodeJS",
              "DevOps",
              "Banco de Dados",
              "Typescript",
            ])
          ),
          validate: {
            notEmpty: {
              msg: "O campo de knowledges está vazio.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
