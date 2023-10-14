const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/gofood?retryWrites=true&w=majority";
// const mongoURI = "mongodb://localhost:27017/gofood";

const mongoDB = async () => {
  await mongoose.connect(mongoURI,
    { useNewUrlParser: true }, async (err, result) => {
      if (err) console.log(err)
      else {
        console.log("DB connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err, data){
          const fetched_cat = mongoose.connection.db.collection("food_category");
          fetched_cat.find({}).toArray(function(err, cat){
            if(err) {
              console.log(err)
            } else {
              global.food_items = data;
              global.food_category = cat;
              // console.log(global.food_category);
              // console.log(global.food_items);
            }
          })
          }
        )
      }
    }
  )
}

module.exports = mongoDB;