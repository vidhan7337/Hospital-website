const Department = require("../models/department-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postDepartment = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newDepartment;
    try{
        newDepartment = await Department.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({department:newDepartment.toObject({getters:true})});
}

const getDepartment = async (req,res,next) => {

    let id = req.params.id; 
    let department;
    try{
        department = await Department.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!department){
        return next(new HttpError('Id doesnot exists',500));
    }

    res.json({department:department.toObject({getters:true})});
}

const patchDepartment = async (req,res,next) => {

    let input = req.body;

    let department;
    try{
        department = await Department.findById(input.id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!department){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        department = await Department.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({department:department.toObject({getters:true})});
}

const deleteDepartment = async (req,res,next) => {

    let id = req.params.id;

    let department;
    try{
        department = await Department.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!department){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        department = await Department.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({department:department.toObject({getters:true})});
}

exports.postDepartment = postDepartment;
exports.getDepartment = getDepartment;
exports.patchDepartment = patchDepartment;
exports.deleteDepartment = deleteDepartment;