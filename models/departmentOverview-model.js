const mongoose = require('mongoose');
require("mongoose-type-url");

const departmentOverviewSchema = new mongoose.Schema({

    name: { type:String  , required:true }, 
    
    description: { type:String , required:true }
    
});

module.exports = mongoose.model('DepartmentOverview',departmentOverviewSchema);