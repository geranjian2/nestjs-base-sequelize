'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING(70),
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING(50),
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
    });

    await queryInterface.createTable('posts', {
      id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(100),
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING(100),
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: 'users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: false,
      },
      status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        validate: {
          notEmpty: true,
        },
        allowNull: false,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
      deleted_at: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    await queryInterface.dropTable('posts');
    return;
  },
};
