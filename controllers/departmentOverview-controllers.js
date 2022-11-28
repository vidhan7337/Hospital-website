const DepartmentOverview = require("../models/departmentOverview-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postDepartmentOverview = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newDepartmentOverview;
    try{
        newDepartmentOverview = await DepartmentOverview.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({departmentOverview:newDepartmentOverview.toObject({getters:true})});
}

const getDepartmentOverview = async (req,res,next) => {

    let id = req.params.id; 
    let departmentOverview;
    try{
        departmentOverview = await DepartmentOverview.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!departmentOverview){
        return next(new HttpError('Id doesnot exists',500));
    }

    res.json(departmentOverview.toObject({getters:true}));
}

const patchDepartmentOverview = async (req,res,next) => {

    let input = req.body;

    let departmentOverview;
    try{
        departmentOverview = await DepartmentOverview.findById(input.id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!departmentOverview){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        departmentOverview = await DepartmentOverview.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({departmentOverview:departmentOverview.toObject({getters:true})});
}

const deleteDepartmentOverview = async (req,res,next) => {

    let id = req.params.id;

    let departmentOverview;
    try{
        departmentOverview = await DepartmentOverview.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!departmentOverview){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        departmentOverview = await DepartmentOverview.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({departmentOverview:departmentOverview.toObject({getters:true})});
}
const getAllDept = async (req,res,next)=>{
    let data;
    try{
        data = await DepartmentOverview.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
}

exports.postDepartmentOverview = postDepartmentOverview;
exports.getDepartmentOverview = getDepartmentOverview;
exports.patchDepartmentOverview = patchDepartmentOverview;
exports.deleteDepartmentOverview = deleteDepartmentOverview;
exports.getAllDept=getAllDept;