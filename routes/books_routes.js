const express=require('express');
const router=express.Router();
const BooksController=require('../controllers/books');
 
router.route('/books')
    .get(BooksController.index)
    .post(BooksController.create);
router.get('/books/new',BooksController.new);
router.get('/books/:id/edit',BooksController.edit);
router.route('/books/:id')
    .get(BooksController.show)
    .put(BooksController.update)
    .delete(BooksController.destroy);
module.exports=router;