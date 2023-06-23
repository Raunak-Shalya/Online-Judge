const express=require('express')
const passport=require('passport')
const cors = require('cors')
const path=require('path')
const app=express();
const { default: router } = require('../Routes');
require('./auth');

app.use(express.json());
app.use(express.static(path.join(__dirname,'client')))

app.use(cors());
var session = require('express-session');


const DB=require('./databases/Problems.js')
DB.DBConnection();


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


app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    
  }),
  (req, res) => {
    res.redirect("http://localhost:3000/homepage");
  }
);



app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})