const fs = require("fs");
var express = require("express");
var router = express.Router();
const { createCanvas, loadImage } = require("canvas");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express"});
});

router.post("/cert", function (req, res, next) {
  updateCanvas(req.body)
    .then((buffer) => {
      res.send(req.body.textProps);
    })
    .catch((e) => {
      res.send(e);
    });
});

async function updateCanvas(certificates) {
  const { template, textProps, csv } = certificates;
  const image = await loadImage(`public/templates/${template}`);
  var canvas = createCanvas(image.width, image.height);
  ctx = canvas.getContext("2d");
  csv.map(async (certificate, index) => {
    ctx.drawImage(image, 0, 0);
    textProps.map((drawProperties, i) => {
      const { x , y, size } = drawProperties;
      console.log(drawProperties);
      const { title } = certificate[i];
      let metrics = ctx.measureText(title);
      ctx.fillStyle = "#fff";
      ctx.font = `bold ${size}pt Montserrat`;
      const regex = /\d/;
      const doesItHaveNumber = regex.test(title);

      if (!doesItHaveNumber) {
        var centeredWidth = (image.width - metrics.width - 250) / 2;
        console.log('it is a number');
      }
      else{
        var centeredWidth = x-200;
      }
      ctx.fillText(title, centeredWidth , y );
    });
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(`public/images/imi${index}.png`, buffer);
  });
}

module.exports = router;