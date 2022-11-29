const Uro = require("../models/uro-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postUro = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newUro;
    try{
        newUro = await Uro.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Uro:newUro.toObject({getters:true})});
}

const getUro = async (req,res,next) => {

    let id = req.params.id; 
    let Uro;
    try{
        Uro = await Uro.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(Uro.toObject({getters:true}));
}

const patchUro = async (req,res,next) => {

    let input = req.body;
    let newUro;
    try{
        newUro = await Uro.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Uro:newUro.toObject({getters:true})});
}

exports.postUro = postUro;
exports.getUro = getUro;
exports.patchUro = patchUro;