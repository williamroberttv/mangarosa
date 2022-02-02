import { Model, DataTypes } from "sequelize";
import database from "../database";

class User extends Model {
  public name!: string;
  public email!: string;
  public cpf!: string;
  public cellphone: string;
  public validated: boolean;
  public knowledges!: string[];
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
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
    validated: {
      type: DataTypes.BOOLEAN,
    },
    knowledges: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      validate: {
        notEmpty: {
          msg: "O campo de knowledges está vazio.",
        },
      },
    },
  },
  { sequelize: database.connection }
);
export { User };
