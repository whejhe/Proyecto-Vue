const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();



const Album = sequelize.define('Album', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    releaseDate: {
        type: DataTypes.DATEONLY,
    },
    coverImage: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});

module.exports.Sequelize = Sequelize;
module.exports.Album = Album;