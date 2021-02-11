require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const proxy = require('express-http-proxy');
const cors = require('cors');
const expressStaticGzip = require('express-static-gzip')

app.use('/', expressStaticGzip('client/dist', {
  enableBrotli: true,
  customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz'
  }],
  orderPreference: ['br'],
  setHeaders: function (res, path) {
    res.setHeader('Cache-Control', 'public, max-age=31536000');
  }
}));
app.use(express.static('client/dist'));
app.use(cors());

app.use(
  '/reddit',
  proxy('https://app-hrsei-api.herokuapp.com/', {
    proxyReqOptDecorator: function (proxyReqOpts, srcReq) {
      proxyReqOpts.headers['Authorization'] = `${process.env.TOKEN}`;
      return proxyReqOpts;
    },
  })
);

app.get('/', (req, res) => {
  res.send('root');
})

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
})