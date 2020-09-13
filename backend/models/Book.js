const { Schema, model }= require('mongoose');


const BookSchema = new Schema({  // Creación de un nuevo schema para definir el orden de los datos
    title: { type: String, required: true},
    author: { type: String, required: true},
    isbn: { type: String, required: true},
    imagePath: { type: String, required: true},
    created_at: { type: Date, default: Date.now}
})

module.exports = model('Book', BookSchema) 