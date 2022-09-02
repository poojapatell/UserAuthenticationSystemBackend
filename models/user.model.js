module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      age:{
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING
      },
    });
    return User;
  };