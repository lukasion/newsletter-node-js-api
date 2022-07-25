const connection = require('../config/connection.json');
const Sequelize = require('sequelize');
const { applyExtraSetup } = require('./extra-setup.js')

const sequelize = new Sequelize({
  database: connection.database,
  username: connection.user,
  host: connection.host,
  port: connection.port,
  password: connection.password,
  dialect: 'mysql',
  operatorsAliases: false
});

const modelDefiners = [
	require('./users.model'),
];

for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}
applyExtraSetup(sequelize);

module.exports = sequelize