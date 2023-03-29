'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'Max Power',
        email: 'max_power@mail.com',
        password: 'max_power1234*',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Justin',
        email: 'justin@mail.com',
        password: 'justin1234*',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Marcelo',
        email: 'marcelo@mail.com',
        password: 'marcelo1234*',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  
  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('users', null, {});
  },
};
