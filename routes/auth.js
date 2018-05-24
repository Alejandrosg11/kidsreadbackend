const router = require('express').Router();
const passport = require('passport');
const User = require('../models/User');

function isAuthenticated(req, res, next){
    if(req.isAuthenticated()) return next();
    res.status(403);
    res.send("Epape epale perro que hace aqui");
}

router.post('/login', passport.authenticate('local'), (req,res, next)=>{
    res.json(req.user);
});
    

///////////////////////////////////
///////  RUTAS PARA SIGNUP  ///////
///////////////////////////////////

    router.post('/signup',
        (req,res)=>{
        req.body._id = new mongoose.Types.ObjectId();
            User.register(req.body, req.body.password, function(err, user) {
                if (err) return res.send(err);
                const authenticate = User.authenticate();
                authenticate(req.body.email, req.body.password, function(err, result) {
                    if (err) return res.send(err);
                    return res.redirect('/login');
                })
            })
        });
    
router.get('/logout',isAuthenticated, (req,res) => {
    req.logout();
    res.status(200);
    res.send("Adios papud");
});

router.get("/profile",isAuthenticated, (req, res) => {
   User.findById(req.user._id)
       .then(user => {
           res.json(user);
       })
});

module.exports = router;