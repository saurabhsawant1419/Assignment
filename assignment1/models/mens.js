const express=require("express");
const mongoose= require("mongoose");
//var teams= ['CSK','MI','DC','KKR','RCB','RR','SRH','PK'];
const menSchema=new mongoose.Schema({
    ranking:{
        type:Number
    },
    name:{
        type:String
    },
    team:
    {
        type:[String],
        enum:['CSK','MI','DC','KKR','RCB','RR','SRH','PK']
    },
    country:{
        type:String
    },
    rating:{
        type:String,
        enum: ['A+','A','B+','B','C+','C']
    }
})

const MensRanking = new mongoose.model("MensRanking",menSchema)

module.exports=MensRanking;

