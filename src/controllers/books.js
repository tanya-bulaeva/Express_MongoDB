const Book = require('../models/book')
const getBooks =  (request, response) => {
    //get all books
    Book.find({})
        .then(book => {
            response.status(200).send(book);
        })
        .catch(e => {
            response.status(500).send(e.message);
        });
}

const getBook = (request, response) => {
    //get book
       const {book_id} = request.params;
       return Book.findById(book_id).then(
        (book) => {
        if (!book) response.status(404).send("book not found")
        else response.status(200).send(book)
       }

    ).catch(e =>  response.status(500).send(e.message))
}

const createBook = (request, response) => {
    //create new book
    return Book.create({...request.body}).then(
        (book) => {response.status(201).send(book)}
        
    ).catch(e =>  response.status(500).send(e.message))
}

const updateBook = (request, response) => {
    //update book
    const {book_id} = request.params;
    return Book.findByIdAndUpdate(book_id, {...request.body}).then(
     (book) => {
        if (!book) response.status(404).send("cannot update")
        else response.status(200).send(book)
       }
 ).catch(e =>  response.status(500).send(e.message))
}

const deleteBook = (request, response) => {
    //delete book
    const {book_id} = request.params;
    return Book.findByIdAndDelete(book_id).then(
     (book) => {
        if (!book) response.status(404).send("cannot delete")
        else response.status(200).send("sucess")
       }
 ).catch(e =>  response.status(500).send(e.message))
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}