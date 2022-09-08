//Sirve para autenticar las paginas que puede ingresar una persona no registrada,
//Esta mejor el metodo que tengo en el Proyecto Hospital


module.exports=function(req,res,next){//Los middleaware tienen tres parametros req,res,next

    if(!req.originalUrl.includes("tasks"))return next();//No deja entrar en los links que contenga tasks
    if(req.session.userId) return next();
    res.redirect('/sessions');
};