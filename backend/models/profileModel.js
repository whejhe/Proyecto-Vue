const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();
const bcrypt = require('bcrypt');


const Profile = sequelize.define('Profile', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El nombre es obligatorio'
            },
            notEmpty: {
                msg: 'El nombre no puede estar vacio'
            }
        }
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
        allowNull: false,
        defaultValue: 'other',
        validate: {
            isIn: {
                args: [['male', 'female', 'other']],
            }
        }
    },
    profileImage: {
        type: DataTypes.STRING,
        allowNull: true
    },
}, {
    timestamps: false,
});


sequelize.sync({/*force: true*/}).then(() => {
    console.log('Tabla de Perfil creada o modificada correctamente');
}).catch((error) => {
    console.error('Error al crear la tabla de perfil',error);
});
module.exports.Sequelize = Sequelize;
module.exports.Profile = Profile;

