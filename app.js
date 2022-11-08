//jshint esversion:6
const express = require ("express");
const xmlparser = require ("express-xml-bodyparser");
const app = express();
var path = require('path');
var libxmljs2Router = require('./routes/libxmljs2');
var cheerioRouter = require('./routes/cheerio');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/libxmljs2',libxmljs2Router);
app.use('/', cheerioRouter);

app.use(xmlparser({
    normalizeTags: false
}));

 var parseString = require('xml2js').parseString;
 var xml = "<root>Hello xml2js!</root>"
 parseString(xml, function (err, result) {
     console.dir(result);
});



app.get("/",function (req,res){
    res.render("home");
});



app.get("/xml2js",function(req,res){
    res.render("xml2js")
});

app.post('/xml2js/customer', function(req, res, next) {
  console.log('Raw XML: ' + req.rawBody);
  console.log('Parsed XML: ' + JSON.stringify(req.body));
  if (req.body.retrieveCustomer) {
    var id = req.body.retrieveCustomer.id;
    res.send(`<customer><id>${id}</id><fullName>Bob Smith</fullName></customer>`);
  } else {
    res.status(400).send('Unexpected XML received, missing <retrieveCustomer>');
  }
});


app.listen(3000,function(){
  console.log("Connected on port 3000");
});


module.exports = app;
