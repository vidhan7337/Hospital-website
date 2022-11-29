const Spine = require("../models/spine-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postSpine = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newSpine;
    try{
        newSpine = await Spine.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Spine:newSpine.toObject({getters:true})});
}

const getSpine = async (req,res,next) => {

    let id = req.params.id; 
    let spine;
    try{
        spine = await Spine.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(spine.toObject({getters:true}));
}

const patchSpine = async (req,res,next) => {

    let input = req.body;
    let newSpine;
    try{
        newSpine = await Spine.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Spine:newSpine.toObject({getters:true})});
}

exports.postSpine = postSpine;
exports.getSpine = getSpine;
exports.patchSpine = patchSpine;