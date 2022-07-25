const express = require('express')
const app = express()
const port = 3001
const connection = require('./config/connection.json');
const Sequelize = require('sequelize');
const { DataTypes } = Sequelize;

const sequelize = new Sequelize({
  database: connection.database,
  username: connection.user,
  host: connection.host,
  port: connection.port,
  password: connection.password,
  dialect: 'mysql',
  operatorsAliases: false
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use(express.urlencoded());
app.use(express.json());
app.use(require('./routes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})