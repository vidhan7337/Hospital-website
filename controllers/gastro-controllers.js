const Gastro = require("../models/gastro-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postGastro = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newGastro;
    try{
        newGastro = await Gastro.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Gastro:newGastro.toObject({getters:true})});
}

const getGastro = async (req,res,next) => {

    let id = req.params.id; 
    let gastro;
    try{
        gastro = await Gastro.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(gastro.toObject({getters:true}));
}

const patchGastro = async (req,res,next) => {

    let input = req.body;
    let newGastro;
    try{
        newGastro = await Gastro.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Gastro:newGastro.toObject({getters:true})});
}

exports.postGastro = postGastro;
exports.getGastro = getGastro;
exports.patchGastro = patchGastro;