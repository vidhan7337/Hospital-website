const Plastic = require("../models/plasticsurgery-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postPlastic = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newPlastic;
    try{
        newPlastic = await Plastic.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Plastic:newPlastic.toObject({getters:true})});
}

const getPlastic = async (req,res,next) => {

    let id = req.params.id; 
    let Plastic;
    try{
        Plastic = await Plastic.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(Plastic.toObject({getters:true}));
}

const patchPlastic = async (req,res,next) => {

    let input = req.body;
    let newPlastic;
    try{
        newPlastic = await Plastic.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Plastic:newPlastic.toObject({getters:true})});
}

exports.postPlastic = postPlastic;
exports.getPlastic = getPlastic;
exports.patchPlastic = patchPlastic;