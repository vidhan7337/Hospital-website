const mongoose = require('mongoose');
require("mongoose-type-url");

const doctorSchema = new mongoose.Schema({

    image: { type:mongoose.SchemaTypes.Url },

    name: { type:String  , required:true }, 
    
    description: { type:String , required:true }
    
});

module.exports = mongoose.model('Doctor',doctorSchema);