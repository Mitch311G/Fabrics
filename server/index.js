const express = require('express')

const app = express();

const PORT = 3000;
app.listen(PORT, () => {console.log(`Listening on port: ${PORT}`)})

app.use(express.json())

app.use('/', express.static(__dirname + '/../client/dist'))