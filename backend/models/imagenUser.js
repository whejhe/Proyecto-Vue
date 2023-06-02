const sequelize = require("../models/dbConnection");
const { Sequelize, DataTypes } = require("sequelize");
const fs = require("fs");
const path = require("path");

const defaultImage = fs.readFileSync(path.join(__dirname, "..", "images", "Default.jpg"));

const imageUsers = sequelize.define(
    "imageUsers",
    {
        idUser: {
            type: DataTypes.INTEGER,
            foreignkey: true,
            references: {
                model: "Users",
                key: "id"
            }
        },
        idImage: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true,
        },
        imageProfile:{
            type: DataTypes.BLOB,
            allowNull: false,
            defaultValue: defaultImage,
        }
    }, {
    sequelize,
    modelName: 'imageUsers',
    timestamps: false,
}
);

// sequelize.sync({force:true});

module.exports.imageUsers = imageUsers;