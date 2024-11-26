const { Sequelize, Datatypes } = require("sequelize");

const sequelize = new Sequelize("crud", "postgres", "admin", {
  host: "localhost",
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(`Error caused ${err}`));

module.exports = {sequelize, Datatypes};


