const req = require('express/lib/request');

const User=require('../models').User;
module.exports={
    create: function(req,res){
        User.create({
            name:req.body.name,
            password:req.body.password
        }).then(()=>{
            res.redirect('/users');
         }).catch(err=>{
             console.log(err);
             res.json(err);
         })
        },
        index: (req,res)=>{
            User.findAll().then((users)=>{
                res.render('users/index',{users});
            })
        },
        new: (req,res)=>{
            res.render('users/new');
        },
        show: (req,res)=>{
            User.findByPk(req.params.id).then((user)=>{
                res.render('users/show',{user});
            });
        },
        edit: (req,res)=>{
            User.findByPk(req.params.id).then((user)=>{
                res.render('users/edit',{user});
            });
        },
        update: (req,res)=>{
            User.update({name:req.body.name,password:req.body.password},{
                where:{
                    id: req.params.id
                }
            }).then((response)=>{
                res.redirect('/users/'+req.params.id);
            });
        },
        destroy: (req,res)=>{
            User.destroy({
                where:{
                    id: req.params.id
                }
            }).then((contadorElementosEliminados)=>{
                res.redirect('/users')
            });
        },
};