const Home = require("../models/home-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postHome = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newHome;
    try{
        newHome = await Home.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({home:newHome.toObject({getters:true})});
}

const getHome = async (req,res,next) => {

    let id = req.params.id; 
    let home;
    try{
        home = await Home.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json(home.toObject({getters:true}));
}

const patchHome = async (req,res,next) => {

    let input = req.body;
    let newHome;
    try{
        newHome = await Home.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({home:newHome.toObject({getters:true})});
}

exports.postHome = postHome;
exports.getHome = getHome;
exports.patchHome = patchHome;