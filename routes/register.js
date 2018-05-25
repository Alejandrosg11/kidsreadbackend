const router = require('express').Router();
const passport = require('passport');

function isAuthenticated(req, res, next){
    if(req.isAuthenticated()) return next();
    res.status(403);
    res.send("No estas Logeado");
}

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

module.exports = router;
