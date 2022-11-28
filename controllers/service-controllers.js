const Service = require("../models/service-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postService = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newService;
    try{
        newService = await Service.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({service:newService.toObject({getters:true})});
}

const getService = async (req,res,next) => {

    let id = req.params.id; 
    let service;
    try{
        service = await Service.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!service){
        return next(new HttpError('Id doesnot exists',500));
    }

    res.json({service:service.toObject({getters:true})});
}

const patchService = async (req,res,next) => {

    let input = req.body;

    let service;
    try{
        service = await Service.findById(input.id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!service){
        return next(new HttpError('Id doesnot exists',500));
    }

    let newService;
    try{
        newService = await Service.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({service:newService.toObject({getters:true})});
}

const deleteService = async (req,res,next) => {

    let id = req.params.id;

    let service;
    try{
        service = await Service.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!service){
        return next(new HttpError('Id doesnot exists',500));
    }

    let deleteService;
    try{
        deleteService = await Service.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({service:deleteService.toObject({getters:true})});
}

const getAllService = async (req,res,next)=>{
    let data;
    try{
        data = await Service.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
   
}

exports.postService = postService;
exports.getService = getService;
exports.patchService = patchService;
exports.deleteService = deleteService;
exports.getAllService = getAllService;