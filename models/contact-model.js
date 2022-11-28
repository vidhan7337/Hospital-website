const mongoose = require('mongoose');
const mongooseTypePhone = require('mongoose-type-phone');
require("mongoose-type-url");
require('mongoose-type-email');

const contactSchema = new mongoose.Schema({

    phone1:{ type:String , required:true }, 
    
    phone2: { type:String },

    email1: { type:String , required:true },
    
    email2: { type:String },
    
    address1: { type:String , required:true },
    
    address2: { type:String },
    
    instagram: { type:mongoose.SchemaTypes.Url },
    
    facebook: { type:mongoose.SchemaTypes.Url },
   
    linkedln: { type:mongoose.SchemaTypes.Url },
    
    twitter: { type:mongoose.SchemaTypes.Url }
});

module.exports = mongoose.model('Contact',contactSchema);