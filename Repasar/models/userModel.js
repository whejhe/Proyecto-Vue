const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();
const path = require('path');
const bcrypt = require('bcrypt');

const defaultImage = "./images/Default.jpg";


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
    newPassword: {
        type: DataTypes.VIRTUAL,
        allowNull: true,
        validate: {
            notEmpty: {
                msg: 'La nueva contraseña no puede estar vacia'
            },
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: 'El nombre no puede tener mas de 255 caracteres'
            }
        }
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: 'El apellido no puede tener mas de 255 caracteres'
            }
        }
    },
    edad: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            min: {
                args: 0,
                msg: 'La edad debe ser mayor o igual a 0'
            },
            max: {
                args: 150,
                msg: 'La edad debe ser menor o igual a 150'
            }
        }
    },
    genero:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: 'El telefono no puede tener mas de 255 caracteres'
            }
        }
    },
    profileImage: {
        type: DataTypes.BLOB,
        allowNull: true,
    }
},{
    timestamps:false
});

/*Descomentar "force: true" para borrar datos*/
sequelize.sync({/*force: true*/}).then(() => {
    console.log('La conexión a la base de datos se ha establecido correctamente.');
}).catch((error) => {
    console.error('Ocurrió un error durante la conexión a la base de datos:', error);
});

module.exports.Sequelize = Sequelize;
module.exports.User = User;