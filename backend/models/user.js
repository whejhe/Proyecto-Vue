'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
User.init({
        id: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

        username: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'El nombre de Usuario es obligatorio'
            },
            notEmpty: {
                msg: 'El nombre del Usuario no puede estar vacio'
            }
        },

        email: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'La direccion de correos es obligatoria'
            },
            notEmpty: {
                msg: 'El correo no puede estar vacio'
            },
            isEmail: {
                msg: 'La direccion de correos no es valida'
            },
            isLowercase: {
                msg: 'El correo debe estar en minusculas'
            }
        },

        password: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'La contraseña es obligatoria'
            },
            notEmpty: {
                msg: 'La contraseña no puede estar vacia'
            },
        },

        firstName: DataTypes.STRING,
        allowNull: true,

        lastName: DataTypes.STRING,
        allowNull: true,

        age: DataTypes.INTEGER,
        allowNull: true,

        gender: DataTypes.STRING,
        allowNull: true,
        defaultValue: 'other',
        validate: {
            isIn: {
                args: [['male', 'female', 'other']],
            }
        },

        profileImage: DataTypes.BLOB,
        allowNull: true,
    }, {
        sequelize,
        modelName: 'User',
        timestamps: false,
    });
    return User;
};
