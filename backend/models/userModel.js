const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');


const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'El nombre de Usuario es obligatorio'
            },
            notEmpty: {
                msg: 'El nombre del Usuario no puede estar vacio'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'La direccion de correos es obligatoria'
            },
            notEmpty: {
                msg: 'El correo no puede estar vacio'
            },
            isEmail:{
                msg:'La direccion de correos no es valida'
            },
            isLowercase: {
                msg: 'El correo debe estar en minusculas'
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'La contraseña es obligatoria'
            },
            notEmpty: {
                msg: 'La contraseña no puede estar vacia'
            },
        }
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'other',
        validate: {
            isIn: {
                args: [['male', 'female', 'other']],
            }
        }
    },
    profileImage: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
},{
    timestamps:false
});

// sequelize.sync({force: true})


// module.exports.Sequelize = Sequelize;
module.exports.User = User;