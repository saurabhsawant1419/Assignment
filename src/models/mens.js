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
        type:String
    },
    country:{
        type:String
    },
    rating:{
        type:Number
    }
})

const MensRanking = new mongoose.model("MensRanking",menSchema)

module.exports=MensRanking;

