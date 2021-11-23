const express=require('express')
const app=express();
const mongoose=require('mongoose');
require("../assignment1/db/conn");
const MensRanking=require("../assignment1/models/mens")
const port = process.env.PORT || 3030;

app.use(express.json());

app.use(
  express.urlencoded({ extended: true })
);

app.post("/mens", async(req,res) => {
 try{
   const addingMensRecords=new MensRanking(req.body)
   console.log(req.body);
   const insertMens= await addingMensRecords.save()
   res.status(201).send(insertMens)
 }catch(e){
   res.status(400).send(e)
 }
})

app.get("/mens", async(req,res) => {
    try{
      const getMens = await MensRanking.find({});
      
      res.send(getMens)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.get("/mens/:id", async(req,res) => {
    try{
        const _id= req.params.id;
      const getMen = await MensRanking.findById(_id);
      
      res.send(getMen)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.get("/country", async(req,res) => {
    try{
      //const country=req.params.country;
      const getCountry = await MensRanking.find({
        $or:[ 
          {country:"South Africa"}, {country:"Australia"} 
        ]}
      ).exec();
      
      res.send(getCountry)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.get("/ranking", async(req,res) => {
    try{
      const ranking=req.params.ranking;
      const getranks = await MensRanking.find(ranking).limit(10).exec();
      
      res.send(getranks)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.get("/rating", async(req,res) => {
    try{
      //const rating=req.params.rating;
      const getrank = await MensRanking.find({rating:"B+"}).exec();
      
      res.send(getrank)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.get("/team", async(req,res) => {
    try{
      //const team=req.params.team;
      const getteam = await MensRanking.find({team:"CSK"}).exec();
      
      res.send(getteam)
    }catch(e){
      res.status(400).send(e)
    }
   })

   app.patch("/mens/:id", async(req,res) => {
    try{
        const _id= req.params.id;
      const getMen = await MensRanking.findByIdAndUpdate(_id,req.body,{
          new:true
      });
      
      res.send(getMen)
    }catch(e){
      res.status(500).send(e)
    }
   })

   app.delete("/mens/:id", async(req,res) => {
    try{
        const _id= req.params.id;
      const getMen = await MensRanking.findByIdAndDelete(_id)
      res.send(getMen)
    }catch(e){
      res.status(500).send(e)
    }
   })
   
app.listen(port, () => {
console.log(`Connection is live on port no. ${port}`)
}
)
