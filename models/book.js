'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {

    static associate(models) {
        Book.belongsTo(models.User,{//Se crea la relacion Book pertenece a usuario
          as:'user' //Se le da un nombre en minuscula
        });
    }
  }
  Book.init({
    name: DataTypes.TEXT,
    pages: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};