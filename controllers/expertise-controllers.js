const Expertise = require("../models/expertise-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postExpertise = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newExpertise;
    try{
        newExpertise = await Expertise.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({expertise:newExpertise.toObject({getters:true})});
}

const getExpertise = async (req,res,next) => {

    let id = req.params.id; 
    let expertise;
    try{
        expertise = await Expertise.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(expertise.toObject({getters:true}));
}

const patchExpertise = async (req,res,next) => {

    let input = req.body;
    let newExpertise;
    try{
        newExpertise = await Expertise.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({expertise:newExpertise.toObject({getters:true})});
}

exports.postExpertise = postExpertise;
exports.getExpertise = getExpertise;
exports.patchExpertise = patchExpertise;