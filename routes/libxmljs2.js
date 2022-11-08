//jshint esversion:6
const express = require('express');
var router = express.Router();
var libxmljs = require('libxmljs2');
var fs = require('fs');
var path = require('path');

var router = express.Router();

router.get('/libxmljs2', function(req, res, next) {
    res.render('libxmljs2', {});
  });

router.post('/libxmljs2/validateSessionXml', (req, res, next) => {
  var xmlData = req.body;

  // parse incoming XML data
  var xmlDoc = libxmljs.parseXml(xmlData);  

  // load XML schema from file system
  var xmlSchemaDoc = loadXmlSchema('session-info.xsd');

  // validate XML data against schema
  var validationResult = xmlDoc.validate(xmlSchemaDoc);

  // return success or failure with validation errors
  if (validationResult) {
    res.status(200).send('validation successful');
  } else {
    res.status(400).send(`${xmlDoc.validationErrors}`);
  }  
});

function loadXmlSchema(filename) {
  var schemaPath = path.join(__dirname, '..', 'schemas', filename);
  var schemaText = fs.readFileSync(schemaPath, 'utf8');
  return libxmljs.parseXml(xmlSchema); 
}


module.exports = router;