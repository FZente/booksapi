import express from 'express'
import * as controllers from '../controllers/booksControllers.js'

const router = express.Router();

app.get('/', controllers.getBooks);

app.get('/:id', controllers.getBooksById);

app.post('/', controllers.createBooks);

app.put('/:id', controllers.updateBooks);

app.delete('/:id', controllers.deleteBooks);

export default router