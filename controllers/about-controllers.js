const About = require("../models/about-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postAbout = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newAbout;
    try{
        newAbout = await About.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({about:newAbout.toObject({getters:true})});
}

const getAbout = async (req,res,next) => {

    let id = req.params.id; 
    let about;
    try{
        about = await About.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(about.toObject({getters:true}));
}

const patchAbout = async (req,res,next) => {

    let input = req.body;
    let newAbout;
    try{
        newAbout = await About.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({about:newAbout.toObject({getters:true})});
}

exports.postAbout = postAbout;
exports.getAbout = getAbout;
exports.patchAbout = patchAbout;