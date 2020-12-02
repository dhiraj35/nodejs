//const sum = require('./test');
//const getsum = require('./test');

//console.log(getsum.mul(2,3)); 

const express = require('express');
const app=express();
const port = 3000;  

require('./routes')(app);       


app.get('/home',(req,res) =>{  
    res.send("Hello World....");

}
)
app.use(express.static('public'));    





app.listen(port,()=>{
    console.log("server is running of port"+port);  
})

