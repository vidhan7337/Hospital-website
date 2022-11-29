const mongoose = require('mongoose');
require("mongoose-type-url");

const departmentSchema = new mongoose.Schema({

    name:{ type:String  , required:true }, 
    
    backgroundImage: { type:mongoose.SchemaTypes.Url , required:true },

    image1: { type:mongoose.SchemaTypes.Url , required:true },

    point1: { type:String },
    
    point2: { type:String },
    
    point3: { type:String },
    
    point4: { type:String }
    
});

module.exports = mongoose.model('Gynaec',departmentSchema);