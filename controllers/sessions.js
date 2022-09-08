const User=require('../models').User;
module.exports={
    new: function(req,res){
        res.render('sessions/new');
    },
    create: function(req,res){
        User.login(req.body.name,req.body.password)
        .then(user=>{
            if(user){
                req.session.userId=user.id;//Por este medio obtiene la session el programa.
            }
            res.json(user);
        })
        .catch(err=>{
            console.log(err);
            res.json(err);
        });
    },
    destroy: (req,res)=>{
        req.session.destroy(()=>{
            res.redirect('/sessions')
        });
    }
}