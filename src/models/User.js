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
          },
        },
        cpf: {
          type: DataTypes.STRING,
          validate: {
            is: {
              args: /^\d{3}\x2E\d{3}\x2E\d{3}\x2D\d{2}$/,
              msg: "O cpf não é válido. O campo cpf deve conter 14 caracteres.",
            },
            notEmpty: {
              msg: "O campo cpf é obrigatório.",
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
