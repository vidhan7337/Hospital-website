const Gynaec = require("../models/gynaec-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postGynaec = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newGynaec;
    try{
        newGynaec = await Gynaec.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Gynaec:newGynaec.toObject({getters:true})});
}

const getGynaec = async (req,res,next) => {

    let id = req.params.id; 
    let Gynaec;
    try{
        Gynaec = await Gynaec.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(Gynaec.toObject({getters:true}));
}

const patchGynaec = async (req,res,next) => {

    let input = req.body;
    let newGynaec;
    try{
        newGynaec = await Gynaec.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({Gynaec:newGynaec.toObject({getters:true})});
}

exports.postGynaec = postGynaec;
exports.getGynaec = getGynaec;
exports.patchGynaec = patchGynaec;