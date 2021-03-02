const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const expressStaticGzip = require("express-static-gzip");

app.use(
  "/",
  expressStaticGzip("client/dist", {
    enableBrotli: true,
    customCompressions: [
      {
        encodingName: "deflate",
        fileExtension: "zz",
      },
    ],
    orderPreference: ["br"],
    setHeaders: function (res, path) {
      res.setHeader("Cache-Control", "public, max-age=31536000");
    },
  })
);
app.use(express.static("client/dist"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, () => {
  console.log(`Express running on port ${PORT}`);
});
