const express=require('express')
const app=express();
const mongoose=require('mongoose');
require("../src/db/conn");
const MensRanking=require("../src/models/mens")
const port = process.env.PORT || 3000;

app.use(express.json());

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
