const express=require('express')
const passport=require('passport')
const cors = require('cors')
const path=require('path')
const app=express();
const dbmodel=require('./models/Problems')
require('./passport');

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


const DB=require('./databases/Problems.js')
DB.DBConnection();


const authrouter=require('./Routes/auth');
const getproblemserouter=require('./Routes/getproblems');
const submitrouter=require('./Routes/submit')

app.use('/getproblems',getproblemserouter);
app.use('/auth',authrouter);
app.use('/submit',submitrouter)

app.get('/logout',(req,res)=>{
  req.session.destroy((err) => {
    res.redirect('http://localhost:3000/login') // will always fire after session is destroyed
  })
})

app.listen(5000, ()=>{
    console.log("Listening on port 5000");
})