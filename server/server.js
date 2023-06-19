
const express=require('express')
const passport=require('passport')
const path=require('path')
const app=express();

require('./auth');

app.use(passport.initialize());
app.use(passport.session());



app.use(express.json());
app.use(express.static(path.join(__dirname,'client')))


app.get('/auth/google',
  passport.authenticate('google', { scope: ['email' , 'name'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/homepage');
  });


app.listen(3000, ()=>{
    console.log("Listening on port 3000");
})