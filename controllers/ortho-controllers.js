const Ortho = require("../models/ortho-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postOrtho = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newOrtho;
    try{
        newOrtho = await Ortho.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Ortho:newOrtho.toObject({getters:true})});
}

const getOrtho = async (req,res,next) => {

    let id = req.params.id; 
    let Ortho;
    try{
        Ortho = await Ortho.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(Ortho.toObject({getters:true}));
}

const patchOrtho = async (req,res,next) => {

    let input = req.body;
    let newOrtho;
    try{
        newOrtho = await Ortho.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Ortho:newOrtho.toObject({getters:true})});
}

exports.postOrtho = postOrtho;
exports.getOrtho = getOrtho;
exports.patchOrtho = patchOrtho;