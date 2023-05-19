const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../models/dbConnection");
const dotenv = require("dotenv");
dotenv.config();
const userModel = require("./userModel");
const fs = require('fs')
const defaultImage = fs.readFileSync("../images/Default.jpg")

const imageUser = sequelize.define("imageModel",{
        userId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references: {
                model: "userModel",
                key: "id",
                onDelete: 'CASCADE',
            },
            onDelete: 'CASCADE'
        },
        img: {
            type: DataTypes.BLOB,
            allowNull: true,
            defaultValue: defaultImage,
        },
        imageName: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                isAlphanumeric: true,
            },
        },
        imageExtension: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },{
        timestamps: false,
    }
    
);

imageUser.belongsTo(userModel, {
    foreignKey:{
        name: 'userId',
        primaryKey: true
    }
})

sequelize.sync({/*force: true*/}).then(() => {
    console.log('La conexión a la base de datos se ha establecido correctamente.');
}).catch((error) => {
    console.error('Ocurrió un error durante la conexión a la base de datos:', error);
});

module.exports.Sequelize = Sequelize;
module.exports.imageUser = imageUser;