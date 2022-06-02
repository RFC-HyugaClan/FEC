const express = require("express");
const port = process.env.port
require("dotenv").config();
const axios = require('axios');
const path = require('path');

const app = express()

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use('/api/*', async (req, res) => {
  try {
    const payload = await axios({
      method: req.method.toLowerCase(),
      url: process.env.API_URL + req.params[0],
      headers: {Authorization: process.env.API_KEY},
      data: req.body,
      params: req.query,
    });
    res.send(payload.data)
  }
  catch (error) {
    console.log(error.response)
  }
})

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../client/public'),
  });
});

app.listen(process.env.port, () => {
  console.log(`listening on Port: ${process.env.port}`);
})
