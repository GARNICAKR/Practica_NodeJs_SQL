//comando para generar migraciones y modelos.
//sequelize model:generate --name User --attributes name:text,password:text
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task= sequelize.define('Task',{
    description: DataTypes.TEXT
  },{});

  Task.associate=function(models){
    Task.belongsTo(models.User,{//Se crea la relacion task pertenece a usuario
      as:'user' //Se le da un nombre en minuscula
    });
  };
  return Task;
};