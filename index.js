const express = require("express");
const path = require('path');
const jsforce = require('jsforce');
const session = require('express-session');
const bodyParser = require('body-parser'); //needed for parsing out requests

//setup server
const app = express();

//initialize session
app.use(session({secret: 'S3CRE7', resave: true, saveUninitialized: true}));

app.use('/css', express.static('/node_modules/bootstrap/dist/css'));
app.use('/js', express.static('/node_modules/bootstrap/dist/js'));
app.use('/js', express.static('/node_modules/jquery/dist'));

module.exports = app;

//jsForce connection
const oauth2 = new jsforce.OAuth2({
  loginUrl : 'https://none-f4-dev-ed.lightning.force.com/',
  clientId : '3MVG9kBt168mda_8wbawdGgh6BGrg0ATTk.skVsnpGvRewwKvsW9YMnSoY7cHTy3nYOLD7wSFOWQY...ebx0l',
  clientSecret : '9239EFDE387F0954625BC89A19E3FAAC52F8B0A7A2D4758A03B3B8E166B92CF8',
  redirectUri : 'https://young-scrubland-49980.herokuapp.com/'
});
app.get("/login", function(req, res) {
  // Redirect to Salesforce login/authorization page
  res.redirect(oauth2.getAuthorizationUrl({scope: 'api id web refresh_token'}));
});
app.get("/showObjects", function(req, res) {
  // Redirect to Salesforce login/authorization page
  res.send('You logged in!!!!!')
});