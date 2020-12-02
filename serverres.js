const express = require("express");
const app=express();    
const port = 4000;   
const bodyParser = require("body-parser"); 

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())  

require("./models/wish");    


const mongoose = require("mongoose");
const mongosekey = require("./config/keys");
mongoose.connect(mongosekey.mongourl);  
const forms = mongoose.model("Forms");      



//Allow Data form client side 
app.use(function(req,res,next){

    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,Content-Type');
    res.setHeader('Access-Control-Allow-Credentials',true); 
   next();
});


app.post('/senddata',(req,res) => { 
  const Item = new forms({    
        username : req.body.username,           
        password : req.body.password   
         

    })   
    Item.save().then(data => {  
        console.log("save");
        res.send(data);                            

    } ).catch(err => {
        throw err;    
    });     
   // res.send(JSON.stringify(req.body)); 

})

app.listen(port,() =>{
    console.log("server is running on port "+port);  

}
);  
