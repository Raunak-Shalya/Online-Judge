const express=require('express')
const passport=require('passport')
const cors = require('cors')
const path=require('path')
const app=express();
const dbmodel=require('./models/Problems')
require('./auth');

app.use(express.json());
app.use(express.static(path.join(__dirname,'client')))

app.use(cors());
var session = require('express-session');





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


const DB=require('./databases/Problems.js')
DB.DBConnection();

const fetchproblems=require('./fetchdata/Problems');

app.get('/homepage', (req,res)=>{
  res.send(fetchproblems())
});


app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})