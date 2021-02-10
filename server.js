require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const proxy = require('express-http-proxy');
const cors = require('cors');
const trends = require('google-trends-api')

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

app.use('/trends', async(req, res) => {
  let chart = await trends.interestOverTime({
    keyword: req.query.keyword,
    startTime: new Date(req.query.startTime),
    endTime: new Date(req.query.endTime)
  })
  res.send(chart);
});

app.get('/', (req, res) => {
  res.send('root');
})

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
})