const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/records', {
   // useCreateIndex:true,
  // useNewUrlParser:true,
  //  useUnifiedTopology:true
}).then(() => {
console.log("Connection Successful")})
.catch((e) => {
console.log("Failed to connect")})
