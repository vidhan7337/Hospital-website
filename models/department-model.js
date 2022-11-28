const mongoose = require('mongoose');
require("mongoose-type-url");

const departmentSchema = new mongoose.Schema({

    name:{ type:String  , required:true }, 
    
    backgroundImage: { type:mongoose.SchemaTypes.Url , required:true },

    image1: { type:mongoose.SchemaTypes.Url , required:true },
    
    image2: { type:mongoose.SchemaTypes.Url },
    
    heading1: { type:String },
    
    description1: { type:String , required:true },
    
    heading2: { type:String },
    
    description2: { type:String }
    
});

module.exports = mongoose.model('Department',departmentSchema);