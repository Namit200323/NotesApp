require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const connectDB = require('./server/config/db');
const methodOverride = require("method-override");
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo');

const app = express();
const port = process.env.PORT;



 

app.use(require('express-session')({ 
    secret: 'SECRET',
    resave: true,
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: process.env.MONGODB_URI
      })
  }));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));

//Connect to database
connectDB();

app.use(express.static('public'));

app.use(expressLayouts);
app.set('layout','./layouts/main');
app.set('view engine','ejs');

// Routes
app.use('/',require('./server/routes/index'));
app.use('/',require('./server/routes/dashboard'));
app.use('/',require('./server/routes/auth'));


// Handle 404
app.get('*',(req,res)=>{
    res.status(404).send('404 Page Not Found.')
})
app.listen(port,()=>{
    console.log(`App listening on ${port}`);
})