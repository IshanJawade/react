const express = require('express')
const app = express()
const port = 4000
const database = require('./db')
const fetchData = require('./db')


database().catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`We are listening on port ${port}`)
})