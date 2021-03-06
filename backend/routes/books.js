const { Router } = require('express');
const router = Router();

const Book = require('../models/Book');

router.get('/', async(req, res) => {
    const books = await Book.find();
    res.json(books);

});

router.post('/', async (req, res) => {

    const { title, author, isbn}= req.body;
    const newBook = new Book({title, author, isbn})
    await newBook.save(); //Guarda el registro del libro en la BD
    res.json({message: 'Book Saved'});
});

router.delete('/:id', async (req, res) => {
    await Book.findByIdAndDelete(req.params.id); //Metodo de MongoDB para encontrar y eliminar datos a través de su ID
    res.json({message: 'Book Deleted'});
})

module.exports = router;

