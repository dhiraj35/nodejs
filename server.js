
const express = require('express');

const test = require('./test');

const app=express();  
app.set("view engine","ejs");    



const port = process.env.PORT ||  3000;      
///const  bodyParser = require('body-parser');   
var bodyParser = require('body-parser')
//var jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

require("./models/wish");    


app.use(express.static('public'));       

app.use(bodyParser.urlencoded({ extended: false }))
//const urlencodedParser = bodyParser.urlencoded({ extended: false })

//app.use(express.urlencoded()); //Parse URL-encoded bodies  

 
// parse application/json
app.use(bodyParser.json())  
//app.use(express.json()); //Used to parse JSON bodies  


/*
app.get('/',(req,res)=>{  
    res.send("The output of data "+ test.sum(1,2));     
        
})*/  

/*

app.get('/file',(req,res) => {   
    res.sendFile(__dirname+'/index.html');        
} )


app.get('/profile/:id',(req,res) => {  
    res.send("this is your text "+req.params.id);         
})*/
require('./routes')(app);      



app.listen(port,() =>{
    console.log("server is running on " + port);
}





);

          

