const express=require('express');
const router=express.Router();
const passport=require('passport')
router.get('/google',
passport.authenticate('google', { scope: ['profile'] }));


router.get(
"/google/callback",
passport.authenticate("google", {
  failureRedirect: "/login",
}),
(req, res) => {
  res.redirect("http://localhost:3000/homepage");
}
);

module.exports=router;