const mongoose = require('mongoose');
require("mongoose-type-url");

const departmentSchema = new mongoose.Schema({

    name:{ type:String  , required:true }, 
    
    backgroundImage: { type:mongoose.SchemaTypes.Url , required:true },

    image1: { type:mongoose.SchemaTypes.Url , required:true },

    image2: { type:mongoose.SchemaTypes.Url , required:true },

    point1: { type:String },
    
    point2: { type:String },
    
    point3: { type:String },
    
    point4: { type:String },
    point5: { type:String },
    point6: { type:String },
    point7: { type:String },
    point8: { type:String },
    point9: { type:String },
    point10: { type:String },
    point11: { type:String },
    point12: { type:String },
    point13: { type:String },
    point14: { type:String },
    point15: { type:String }
});

module.exports = mongoose.model('Uro',departmentSchema);