const router = require('express').Router();
const Book = require('../models/Books');

router.get('/', (req, res)=>{
    Book.find()
        .then(books=>{
            res.json(books);
        })
        .catch(e=>{
            console.log(e);
            res.send("Error books")
        })
 });

 router.post('/new', (req,res)=>{
    console.log("aqui")
    Book.create(req.body)
        .then(book=>{
            res.json(book);
        }).catch(e=>{
            res.send(e);
        })
})

router.post('/', (req,res)=>{
    
})

module.exports = router;
