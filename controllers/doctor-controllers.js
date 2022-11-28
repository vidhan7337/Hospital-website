const Doctor = require("../models/doctor-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postDoctor = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newDoctor;
    try{
        newDoctor = await Doctor.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({doctor:newDoctor.toObject({getters:true})});
}

const getDoctor = async (req,res,next) => {

    let id = req.params.id; 
    let doctor;
    try{
        doctor = await Doctor.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!doctor){
        return next(new HttpError('Id doesnot exists',500));
    }

    res.json({doctor:doctor.toObject({getters:true})});
}

const patchDoctor = async (req,res,next) => {

    let input = req.body;

    let doctor;
    try{
        doctor = await Doctor.findById(input.id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!doctor){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        doctor = await Doctor.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({doctor:doctor.toObject({getters:true})});
}

const deleteDoctor = async (req,res,next) => {

    let id = req.params.id;

    let doctor;
    try{
        doctor = await Doctor.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!doctor){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        doctor = await Doctor.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({doctor:doctor.toObject({getters:true})});
}

const getAllDoctor = async (req,res,next)=>{
    let data;
    try{
        data = await Doctor.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
}



exports.postDoctor = postDoctor;
exports.getDoctor = getDoctor;
exports.patchDoctor = patchDoctor;
exports.deleteDoctor = deleteDoctor;
exports.getAllDoctor = getAllDoctor;