const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/?retryWrites=true&w=majority";

async function database() {
  await mongoose.connect(mongoURI);
  console.log('Connected');
}


module.exports =  database;