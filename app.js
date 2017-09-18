'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api = require('./routes')

var nunjucks = require ('nunjucks')
var passport = require('passport');
var flash    = require('connect-flash');
var logger      = require('morgan');
var expressSession = require('express-session');
var cookieParser = require('cookie-parser');
var LocalStrategy = require('passport-local').Strategy;

const productCtrl = require('./controllers/profiles')
const groupCtrl = require('./controllers/groups')

/*var users = require('./routes/users');*/

//configuracion nunjucks
nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
    noCache: false
});

app.set('view engine', 'nunjucks');
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use('/api', api)

app.use(logger('dev'));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static("./public"));

/*var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));*/

//normal routes
app.get('/', (req, res) => {
    res.render('home.html');
});

app.get('/singup', (req, res) => {
    res.render('singup.html');
});

app.get('/lol', (req, res) => {
    res.render('lol.html');
});
app.post('/login', productCtrl.login) 
app.get('/login/:name', (req, res) => {
    res.render('loged.html');
});

app.post('/group', groupCtrl.saveGroup) 
app.get('/login/:name', (req, res) => {
    res.render('loged.html');
});
//form routes
app.post('/singup', productCtrl.saveProfile)

app.get('/login/:name/newgroup', (req, res) =>{
    res.render('newgroup.html')
})
app.get('/login/:name/lol', (req, res) =>{
    res.render('lol1.html')
})

module.exports = app

