const Neuro = require("../models/neuro-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postNeuro = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newNeuro;
    try{
        newNeuro = await Neuro.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Neuro:newNeuro.toObject({getters:true})});
}

const getNeuro = async (req,res,next) => {

    let id = req.params.id; 
    let neuro;
    try{
        neuro = await Neuro.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(neuro.toObject({getters:true}));
}

const patchNeuro = async (req,res,next) => {

    let input = req.body;
    let newNeuro;
    try{
        newNeuro = await Neuro.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Neuro:newNeuro.toObject({getters:true})});
}

exports.postNeuro = postNeuro;
exports.getNeuro = getNeuro;
exports.patchNeuro = patchNeuro;