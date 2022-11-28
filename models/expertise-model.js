const mongoose = require('mongoose');
require("mongoose-type-url");

const expertiseSchema = new mongoose.Schema({

    image:{ type:mongoose.SchemaTypes.Url  , required:true }, 
    
    name1: { type:String , required:true },
    
    description1:  { type:String , required:true },
    
    icon1: { type:String , required:true },
    
    name2: { type:String , required:true },
    
    description2: { type:String , required:true },
    
    icon2: { type:String , required:true },
    
    name3: { type:String , required:true },
    
    description3: { type:String , required:true },
    
    icon3: { type:String , required:true },

    name4: { type:String , required:true },
    
    description4: { type:String , required:true },
    
    icon4: { type:String , required:true }
    
});

module.exports = mongoose.model('Expertise',expertiseSchema);