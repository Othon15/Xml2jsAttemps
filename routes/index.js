const express = require ("express");
const router=express.Router();

router.get("/xml2js",function(req,res){
    res.render("xml2js");
});

console.log(router.post("/xml2js/customer",function(req, res, next){
    console.log("Raw XML"+ req.rawBody);
    console.log("Parsed XML: "+ JSON.stringify(req.body));
    if (req.body.retrievecustomer){
        var id =req.body.retrievecustomer.id;
        res.send("<customer><id>${id}</id><fullName>Bob Smith</fullName></customer>");
    }else {
        res.status(400).send("Unexpected XML received, missing <retrieveCustomer>");
    }
}));




  module.exports = router;