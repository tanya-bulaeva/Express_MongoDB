const Book = require('../models/book')
const getBooks = (request, response) => {
    //get all users
    return Book.find({}).then(
        () => {response.status(200).send(data)}
    ).catch(e =>  response.status(500).send(e.message))
}

const getBook = (request, response) => {
    //get user
       const {book_id} = request.params;
       return Book.findById(book_id).then(
        (book) => {response.status(200).send(book)}
    ).catch(e =>  response.status(500).send(e.message))
}

const createBook = (request, response) => {
    //create new user
    return Book.create({...request.body}).then(
        (book) => {response.status(201).send(book)}
    ).catch(e =>  response.status(500).send(e.message))
}

const updateBook = (request, response) => {
    //update user
    const {book_id} = request.params;
    return User.findByIdAndUpdate(book_id, {...request.body}).then(
     (book) => {response.status(200).send(book)}
 ).catch(e =>  response.status(500).send(e.message))
}

const deleteBook = (request, response) => {
    //delete user
    const {book_id} = request.params;
    return Book.findByIdAndDelete(book_id).then(
     (book) => {response.status(200).send("sucess")}
 ).catch(e =>  response.status(500).send(e.message))
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}