const { DataTypes } = require('sequelize');
const { sequelize } = require('./dbConnection');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();

const imageUsers = sequelize.define('imageUsers', {
    idImage: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El id del usuario es obligatorio'
            },
            notEmpty: {
                msg: 'El id del usuario no puede estar vacio'
            }
        }
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: false,
        defaultValue: URL_DEFAULT_IMAGE,
    }
});

sequelize.sync({force:true});

module.exports.imageUsers = imageUsers;