const Contact = require("../models/contact-model");
const HttpError = require("../util/http-error");
const { validationResult } = require("express-validator");

const postContact = async (req,res,next) => {

    const error = validationResult(req);
    if(!error.isEmpty()){
        console.log(error);
        return next(new HttpError('Invalid input.Please Check!',422));
    }

    let newContact;
    try{
        newContact = await Contact.create(req.body);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({contact:newContact.toObject({getters:true})});
}

const getContact = async (req,res,next) => {

    let id = req.params.id; 
    let contact;
    try{
        contact = await Contact.findById(id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!contact){
        return next(new HttpError('Id doesnot exists',500));
    }

    res.json(contact.toObject({getters:true}));
}

const patchContact = async (req,res,next) => {

    let input = req.body;

    let contact;
    try{
        contact = await Contact.findById(input.id);
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    if(!contact){
        return next(new HttpError('Id doesnot exists',500));
    }

    try{
        contact = await Contact.findByIdAndUpdate({ _id:input.id }, input, { new: true });
    }catch(err){
        console.log(err);
        return next(new HttpError('Something went wrong!',500));
    }

    res.json({contact:contact.toObject({getters:true})});
}

exports.postContact = postContact;
exports.getContact = getContact;
exports.patchContact = patchContact;