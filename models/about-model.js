const mongoose = require('mongoose');
require("mongoose-type-url");

const aboutSchema = new mongoose.Schema({

    about:{ type:String  , required:true }, 
    
    image: { type:mongoose.SchemaTypes.Url , required:true },

    point1: { type:String , required:true },
    
    point2:  { type:String , required:true },
    
    point3: { type:String , required:true },
    
    point4: { type:String , required:true },
    
    point5: { type:String },
    
    point6: { type:String },
    
    point7: { type:String }
    
});

module.exports = mongoose.model('About',aboutSchema);