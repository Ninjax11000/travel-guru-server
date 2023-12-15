const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
app.use(cors());

const places = require('./data/data.json');
const hotels = require('./data/hotels.json');

app.get('/data', (req,res)=>{
    res.send(places);
})

app.get('/', (req, res) => {
  res.send('travel guru is running!')
});

app.get('/hotels/:id', (req,res)=>{
  const id=req.params.id;
  const foundhotels = hotels.filter(n=>n.placeId == id);
  res.send(foundhotels);
})



app.listen(port, () => {
  console.log(`Travel is running on port ${port}`)
})