const express = require('express');

const app=express();  
  const  data = { 
     'name' :'Dhiraj',
     'status' : 'yoo'
 }

 //var datas=['code','sleep','eat']; 

 const mongoose = require('mongoose');
 const  mongoosekeys     = require('./config/keys');  
 //const wish = require("./models/wish");
 const wish = mongoose.model("wishes");
 const fund = mongoose.model("Funds");    


 mongoose.connect(mongoosekeys.mongourl,{ useNewUrlParser: true });    


module.exports = (app) =>{    

    app.get('/about',(req,res) => {   
        //res.send("this is about page wonderful");
        res.render('about');   
    } )
    
    app.get('/',(req,res)=>{    
        //res.sendFile(__dirname +'/index.html');  
        wish.find({}).then(data=>{  
            //console.log(data); 
            res.render('home',{wish :data});                          
 
        })  
    })  

    app.get('/test1',(req,res)=>{     
        //res.sendFile(__dirname +'/index.html');  
       // res.render('home',{'data':data});    
       res.send("this is test 1");               
    })

   app.post('/send',(req,res)=> { 
       const Item = new fund({      
        name : req.body.first_name,    
        email : req.body.email, 
        mobile : req.body.mobile,
        address : req.body.address    
        })   
        Item.save().then(data => {  
            console.log("save");
            res.send(data);                      
  
        } ).catch(err => {  
            throw err;    
        });        
        //console.log();  
       // datas.push(req.body.whish); 
       //res.send(datas);                           
  
    })  
    
    //delete method 

    app.delete('/delete:id',(req,res) =>{     
       // console.log(req.params.id);    
        wish.findOneAndDelete({wish:req.params.id}).then(data => {
            console.log("delted");  
            res.send(data);          
        });    
       // console.log(req.params.id);  
     /*  datas=datas.map(items =>{
           if(items!=req.params.id){
               return items;
           }

       } ) */
    } )  
   /* app.post('/send', urlencodedParser, function (req, res) {    
        //res.send('welcome, ' + req.body.whish) 
        console.log(req.body);   
      })  */
    
}