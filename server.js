const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const proxy = require('express-http-proxy');

app.use(express.static('client/dist'));

app.get('/', (req, res) => {
  res.send('root');
})

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
})