const Book= require('../models').Book;
const User= require('../models').User;
module.exports={
    create: function(req,res){
        Book.create({
            name:req.body.name,
            pages:req.body.pages,
            userId:req.user.id

        }).then((result)=>{res.json(result)})
        .catch(error=>{
            console.log(error);
            res.json(error);
        })
    },
    index:function(req,res){
        Book.findAll()
        .then(books=>{
            res.render('books/index',{books: req.user.books});
        })
        .catch(err=>{
            console.log(err);
            res.json(err);

        });
    },
    new:function(req,res){
        res.render('books/new');
    },
    edit:function(req,res){
        Book.findByPk(req.params.id).then((book)=>{
            res.render('books/edit',{book});
        });
    },
    show:function(req,res){
        Book.findByPk(req.params.id,{
            include:[{
                model: User,
                as:'user'
            }]
        }).then((book)=>{
            res.render('books/show',{book});
        });
    },
    update:(req,res)=>{
        Book.update({name:req.body.name,pages:req.body.pages},{
            where:{
                id:req.params.id
            }
        }).then((response)=>{
            res.redirect('/books/'+req.params.id);
        });
    },
    destroy: (req,res)=>{
        Book.destroy({
            where:{
                id: req.params.id
            }
        }).then((contadorElementosEliminados)=>{
            res.redirect('/books')
        });
    },
};