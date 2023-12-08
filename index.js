const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
app.use(cors());

const places = require('./data/data.json');

app.get('/data', (req,res)=>{
    res.send(places);
})

app.get('/', (req, res) => {
  res.send('travel guru is running!')
});



app.listen(port, () => {
  console.log(`Travel is running on port ${port}`)
})