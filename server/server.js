const express=require('express')
const passport=require('passport')
const path=require('path')
const app=express();
require('./auth');
app.use(express.json());
app.use(express.static(path.join(__dirname,'client')))

var session = require('express-session')




app.get('/login', (req,res) =>{
    res.redirect('/');
})


  app.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' , successRedirect: '/homepage'}));


app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})