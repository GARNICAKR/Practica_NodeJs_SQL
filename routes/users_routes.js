const express =require("express");
let UsersController=require('../controllers/users')
let router=express.Router();
router.route('/users').get(UsersController.index).post(UsersController.create);
router.get('/users/new',UsersController.new);
router.get('/users/:id/edit',UsersController.edit);
router.route('/users/:id')
    .get(UsersController.show)
    .put(UsersController.update)
    .delete(UsersController.destroy);
module.exports=router;