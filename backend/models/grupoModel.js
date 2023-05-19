const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');


const Grupo = sequelize.define('Grupo', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    yearFormed: {
        type: DataTypes.INTEGER,
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: false,
});

module.exports.Grupo = Grupo;
module.exports.Sequelize = Sequelize;