const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/gofood?retryWrites=true&w=majority";

async function database() {
  await mongoose.connect(mongoURI);
  console.log('DB Connected');
  const fectched_data = await mongoose.connection.db.collection("food_items");
  fectched_data.find({}).toArray(function( err, data){
        if(err) console.log(err);
        else console.log(data); 
        }
    )
}

module.exports =  database