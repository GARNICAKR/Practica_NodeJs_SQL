//comando para generar migraciones y modelos.
//sequelize model:generate --name User --attributes name:text,password:text
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task= sequelize.define('Task',{
    description: DataTypes.TEXT
  },{});
  return Task;
};