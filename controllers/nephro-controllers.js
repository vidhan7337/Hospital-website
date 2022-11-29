const Nephro = require("../models/nephro-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postNephro = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newNephro;
    try{
        newNephro = await Nephro.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Nephro:newNephro.toObject({getters:true})});
}

const getNephro = async (req,res,next) => {

    let id = req.params.id; 
    let nephro;
    try{
        nephro = await Nephro.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(nephro.toObject({getters:true}));
}

const patchNephro = async (req,res,next) => {

    let input = req.body;
    let newNephro;
    try{
        newNephro = await Nephro.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Nephro:newNephro.toObject({getters:true})});
}

exports.postNephro = postNephro;
exports.getNephro = getNephro;
exports.patchNephro = patchNephro;