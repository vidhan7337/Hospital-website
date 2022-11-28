const mongoose = require('mongoose');
require("mongoose-type-url");

const homeSchema = new mongoose.Schema({

    healthyLiver:{ type:String  , required:true }, 
    
    fattyLiver: { type:String , required:true },

    cirrhoticLiver: { type:String , required:true },
    
    patientBeds:  { type:Number , required:true },
    
    happyPatients: { type:Number , required:true },
    
    staff: { type:Number , required:true },
    
    surgeries: { type:Number , required:true },
    
    doctor1Name: { type:String , required:true },
    
    doctor1Description: { type:String , required:true },
    
    doctor1imgae: { type:mongoose.SchemaTypes.Url , required:true },
    
    doctor2Name: { type:String , required:true },
    
    doctor2Description: { type:String , required:true },
    
    doctor2imgae: { type:mongoose.SchemaTypes.Url , required:true },
    
    doctor3Name: { type:String , required:true },
    
    doctor3Description: { type:String , required:true },
    
    doctor3imgae: { type:mongoose.SchemaTypes.Url , required:true }

});

module.exports = mongoose.model('Home',homeSchema);