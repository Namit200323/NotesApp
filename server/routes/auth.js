const express = require('express');
const router = express.Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mainController = require('../controller/mainController');
 const User = require('../models/user')


passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:831/google/callback"
  },
  async function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    const newUser = {
        googleId:profile.id,
        displayName:profile.displayName,
        firstName:profile.name.givenName,
        lastName:profile.name.familyName,
        image:profile.photos[0].value
    }
    try{

        let user = await User.findOne({googleId:profile.id});
        if(user){
            done(null,user);
        }else{
            user = await User.create(newUser);
            done(null,user);
        }

    }catch(err){
        console.log(err);
    }
  }
));

router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] }));

router.get('/google/callback', 
  passport.authenticate('google', { 
    failureRedirect: '/login-failure',
    successRedirect: '/dashboard'
 }));

router.get('/login-failure',(req,res)=>{
    res.send("Something Went Wrong!!");
})

// Destroy user session
router.get('/logout',(req,res)=>{
    req.session.destroy(error=>{
        if(error){
            console.log(error);
            res.send("Error loggin out")
        }else{
            res.redirect('/');
        }
    })
})

// Persist user data after successful auth

passport.serializeUser(function(user,done){
    done(null,user.id);
});

// Retrieve user data from session 
passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });


module.exports = router;