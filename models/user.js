'use strict';
const bcrypt=require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const User= sequelize.define('User',{
    name:{ 
      type: DataTypes.STRING,
      unique: true,
      allowNull:false
    },
    password: DataTypes.STRING,
  },{});
  User.associate=function(models){
    User.hasMany(models.Task,{ //Crea la relacion de muchas tareas a un usuario
      as:'tasks'
    });
    User.hasMany(models.Book,{
      as:'books'
    });
  };
  User.beforeCreate(async(user,options)=>{//Encripta la contraseña al crear un nuevo usuario
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  });
  //Sirve para poder crear sesiones
  User.login=function(name,password){
      return User.findOne({
      where:{
        name:name
      }
    }).then(user=>{
      if(!user){console.log("Usuario No Encotrado"); return null;}
      return User.prototype.authenticatePassword(user.password,password).then(valid=> valid ? user:null);
    });
  }
  //se crear una funcion dentro del prototipo de usuario 
  //Sirve para comparar contraseñas una en texto plano y la otra con hash
  User.prototype.authenticatePassword=function(password_hash,password){
    return new Promise((res,rej)=>{
      bcrypt.compare(password,password_hash,function(err,valid){
        if(err){console.log("Error",err );return rej(err);}
        res(valid);
      });
    });
  }
  return User;
};