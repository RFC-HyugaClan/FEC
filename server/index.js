const express = require("express");
const port = process.env.port
require("dotenv").config();
const axios = require('axios');
const path = require('path');

const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));



app.use('/api/*', async (req, res) => {
  console.log(API_URL + req.originalUrl.slice(5). req.method);
  const payload = await axios({
    method: req.method.toLowerCase(),
    url: APU_URL,
    headers: {Authorization: API_KEY},
    data: req.body,
  });
  res.send(payload.data)
})

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../../client/public'),
  });
});


app.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
})
