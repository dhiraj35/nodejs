const mongoose = require('mongoose');
const Schemanew = mongoose.Schema();    

/*const Wishschema = Schemanew({   
    wish : String 
});*/  

var User = new mongoose.Schema({
    wish : String,
     author : String  
 
});

var Form = new mongoose.Schema({  
    username : String,
    password : String 
})

var Fund = new mongoose.Schema({
      name : String,
      email : String,
      mobile : Number,  
      address : String  
});



//module.exports = mongoose.model("wishes",User);  
mongoose.model("wishes",User);
mongoose.model("Forms",Form); 
mongoose.model("Funds",Fund);     
                                      