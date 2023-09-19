const express = require('express');
const app = express();
const port = 4000;
const mongoDB = require('./db');

mongoDB()


app.use(express.json());
app.use('/api', require("./Routes/CreateUser"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`We are listening on port ${port}`)
})