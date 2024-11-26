const {  sequelize } = require("./index");
const bcrypt = require('bcrypt');
const  Datatypes  = require("sequelize");

const User = sequelize.define(
  "User",
  {
    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    email: {
      type: Datatypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        if(user.changed('password')){

            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(user.password, salt);
        }
      },
    },
  }
);

sequelize
  .sync({ alter: true })
  .then(() => console.log("User Table created"))
  .catch((err)=>console.log(`Error syncing: ${err}`));


module.exports = User;