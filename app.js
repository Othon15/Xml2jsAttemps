//jshint esversion:6
const express = require ("express");
const xmlparser = require ("express-xml-bodyparser");
const app = express();

// const xml2js = require(".routes/xml2js");

app.set("view engine","pug");

app.use(xmlparser({
    normalizeTags: false
}));

var parseString = require('xml2js').parseString;
var xml = "<root>Hello xml2js!</root>"
parseString(xml, function (err, result) {
    console.dir(result);
});
// app.set("/xml2js",xml2js);          //to paradeigma elege use alla to kaname set(marina) kai leitourgise!
// app.use(require("./routes"));           

// app.use("/xml2js",xml2js);

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
    console.log("Othon,Server started at localhost 3000!");
  });
