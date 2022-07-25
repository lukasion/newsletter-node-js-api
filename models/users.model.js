const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('users', {
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		login: {
			allowNull: false,
			type: DataTypes.STRING,
			unique: true,
		},
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        }
	});
};