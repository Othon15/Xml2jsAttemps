//jshint esversion:6
////////////////////////////EXPRESS/////////////////////
const express = require ("express");

const app = express();
/////////////////////////XML BODYPARSER////////////////

const xmlparser = require ("express-xml-bodyparser");

app.use(xmlparser());

/////////////////////////EXPRESS.ROUTER//////////////

const router = express.Router();                    

//const xml2js = require ("./xml2js/customer");

//app.use("/xml2js/customer",xml2js);

app.use(require("./routes"));        // epikoinwnei me to directory routes 

///////xml2js////////

var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});

///////////////////////////////PUG///////////////////

const pug = require ("pug");

app.set("view engine","pug");

////////////////////////////////////////////////////////







  app.listen(3000,function(){
    console.log("Othon,Server started at localhost 3000!");
  });