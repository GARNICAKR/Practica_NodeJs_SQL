'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      return await queryInterface.addColumn('books','userId',{
         type: Sequelize.INTEGER,
         references:{
           model:{
             tableName:'Users'
           },
           key:'id'
         }
      })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('books','userId');
  }
};
