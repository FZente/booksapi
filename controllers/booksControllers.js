import books from '../data/data.js'

export const getBooks = (req, res) => {
    res.status(200).json(books);
}

export const getBooksById = (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= books.lenght){
        return res.status(404).json({message: "Book not found"})
    }
    res.status(200).json(books[id])
}

export const createBooks = (req, res) => {
    const {author, title, year} = req.body;
    if (!author || !title || !year){
        return res.status(400).json({message: "Invalid data"});
    }
    const newBook = {author, title, year};
    books.push(newBook);
    res.status(201).json(newBook);
}

export const updateBooks = (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= books.lenght){
        return res.status(404).json({message: "Book not found"})
    }
    res.status(200).json(books[id])
    const {author, title, year} = req.body;
    if (!author || !title || !year){
        return res.status(400).json({message: "Invalid data"});
    }
    books[id] = {author, title, year};
    res.status(200).json(books[id]);
}

export const deleteBooks = (req, res) => {
    const id = req.params.id
    if(id < 0 || id >= books.lenght){
        return res.status(404).json({message: "Book not found"})
    }
    books.splice(id, 1);
    res.status(200).json({message: "Delete sucessful"});
}