const Critical = require("../models/critical-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postCritical = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newCritical;
    try{
        newCritical = await Critical.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Critical:newCritical.toObject({getters:true})});
}

const getCritical = async (req,res,next) => {

    let id = req.params.id; 
    let Critical;
    try{
        Critical = await Critical.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(Critical.toObject({getters:true}));
}

const patchCritical = async (req,res,next) => {

    let input = req.body;
    let newCritical;
    try{
        newCritical = await Critical.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Critical:newCritical.toObject({getters:true})});
}

exports.postCritical = postCritical;
exports.getCritical = getCritical;
exports.patchCritical = patchCritical;