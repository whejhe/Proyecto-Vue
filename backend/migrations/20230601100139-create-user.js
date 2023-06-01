'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
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
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      age: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: 'other',
        validate: {
            isIn: {
                args: [['male', 'female', 'other']],
            }
        }
      },
      profileImage: {
        type: Sequelize.BLOB,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};

