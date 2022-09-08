const { response } = require('express');

const Task=require('../models').Task;
module.exports={
  
create: function(req,res){
    
    Task.create({
        description:req.body.description
    }).then(result=>{
        res.json(result);
     }).catch(err=>{
         console.log(err);
         res.json(err);
     });
    },
    index:(req,res)=>{
        Task.findAll().then((tasks)=>{
            res.render('tasks/index',{tasks:tasks})
        });
    },
    new: (req,res)=>{
        res.render('tasks/new');
    },
    show: (req,res)=>{
        Task.findByPk(req.params.id).then((task)=>{
            res.render('tasks/show',{task})
        });
    },
    edit:(req,res)=>{
        Task.findByPk(req.params.id).then((task)=>{
            res.render('tasks/edit',{task});
        });
    },
    update:(req,res)=>{
        Task.update({description:req.body.description},{
            where:{
                id: req.params.id
            }
        }).then((response)=>{
            res.redirect('/tasks/'+req.params.id);
        });
    },
    destroy:(req,res)=>{
        Task.destroy({
            where:{
                id: req.params.id
            }
        }).then((contadorElementosEliminados)=>{
            res.redirect('/tasks')
        });
    }
    

};

/*
home: function(req,res){
    Task.findAll().then(function(tasks){
        res.render('tasks/index',{tasks: tasks});
    })
}*/