'use strict';
//Con este comando se genera el seeders
//sequelize seed:generate --name generate_users
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('tasks', [{
        id: 1,
        description: "Primer ejemplo de Seeders",
        createdAt: new Date(),
        updatedAt:new Date()
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('tasks', null, {});  
  }
};
