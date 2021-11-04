require("dotenv").config();

module.exports = {
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "mangarosa",
  host: process.env.DB_HOST || "localhost",
  dialect: process.env.DB_DIALECT || "postgres",
  define: {
    timestamps: true,
    underscored: true,
    undescoredAll: true,
  },
};
