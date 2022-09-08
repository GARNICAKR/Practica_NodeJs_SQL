'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name:"Javier",
      password:"a1235",
      createdAt: new Date(),
      updatedAt:new Date()
    },
    {
      id: 2,
      name: "Luis",
      password:"121a5",
      createdAt: new Date(),
      updatedAt:new Date()
    },
    {
      id: 3,
      name: "Pedro",
      password:"121a9",
      createdAt: new Date(),
      updatedAt:new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};