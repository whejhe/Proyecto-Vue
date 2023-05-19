const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./dbConnection');
const dotenv = require('dotenv');
dotenv.config();

const Song = sequelize.define('Song', {
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
    duracion: {
        type: DataTypes.TIME,
    },
    lyrics: {
        type: DataTypes.TEXT,
    },
    link: {
        type: DataTypes.STRING,
    },
    audioUrl: {
        type: DataTypes.STRING,
    }
}, {
    timestamps: false,
});


module.exports.Sequelize = Sequelize;
module.exports.Song = Song;