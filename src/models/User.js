const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        cpf: DataTypes.STRING,
        cellphone: DataTypes.STRING,
        knowledges: DataTypes.ARRAY(
          DataTypes.ENUM([
            "git",
            "react",
            "php",
            "nodeJS",
            "devops",
            "banco de dados",
            "typescript",
          ])
        ),
      },
      {
        sequelize,
      }
    );
  }
}

module.exports = User;
