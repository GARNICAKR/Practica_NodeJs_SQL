'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {//Agrega una columna a la tabla tareas la cual hace referencia de Usuarios
    return await queryInterface.addColumn('tasks','userId',{
      type: Sequelize.INTEGER,
      references:{
        model:{
          tableName:'Users'
        },
        key:'id' //Llave Foranea
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return await queryInterface.removeColumn('tasks','userId');//Remueve la columna anterior y agrega la nueva con userid
  }
};
