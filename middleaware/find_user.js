//Obtiene los datos de la session activa
const User=require('../models').User;
module.exports=function(req,res,next){
    if(!req.session.userId) return  next();
    User.findByPk(req.session.userId,{
        include:[ {             //El include se usa para incluir los datos de la llave foranea
            association: 'tasks',
            association:'books'
         }
        ]
    }).then(user=>{
        if(user){
            req.user=user;
            return next();
        }
    });

};
