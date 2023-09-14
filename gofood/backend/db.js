const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://ishankjawade:MacBookPro2019@cluster0.kgxjnd5.mongodb.net/gofood?retryWrites=true&w=majority";
//onst mongoURI = "mongodb://localhost:27017/";

const mongoDB = async () =>{
  await mongoose.connect(mongoURI, 
    {useNewUrlParser: true } , async (err, result) => {
      if(err) console.log(err)
      else {
        console.log("DB connected");
        const fetched_data = mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(function(err, data){
            if(err) console.log(err);
            else console.log(data);
          }
        )
      }
    }
  )
}

module.exports = mongoDB;