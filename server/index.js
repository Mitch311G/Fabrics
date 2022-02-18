const express = require('express')
const axios = require('axios')
require('dotenv').config()

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))


// API Proxy
app.use('/api/*', async (req, res) => {
  const payload = await axios({
    method: req.method.toLowerCase(),
    url: process.env.API_URL + req.originalUrl.slice(4),
    headers: {Authorization: process.env.API_KEY},
    data: req.body
  });

  res.send(payload.data);
});