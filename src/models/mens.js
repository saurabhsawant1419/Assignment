const express=require("express");
const mongoose= require("mongoose");
const menSchema=new mongoose.Schema({
    ranking:{
        type:Number
    },
    name:{
        type:String
    },
    team:{
        enum: ['CSK','MI','DC','KKR','RCB','RR','SRH','PK'],
        default : 'CSK'
    },
    country:{
        type:String
    },
    rating:{
        type:String
    }
})

const MensRanking = new mongoose.model("MensRanking",menSchema)

module.exports=MensRanking;

