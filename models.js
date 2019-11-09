const Sequelize = require('sequelize');

const db = new Sequelize({
  database: 'portfolio-messages',
  dialect: 'postgres',
  define: {
    underscored: true
  }
});

const Message = db.define('message', {
   name: Sequelize.STRING,
   email: Sequelize.STRING,
   message: Sequelize.STRING
 })

db.sync();
module.exports = {
  Message,
  db
}
