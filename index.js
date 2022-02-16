const axios = require("axios");
const sharp = require("sharp");

async function flipXY(image) {
  return image.flip().flop();
}

async function getImage(url) {
  const response = await axios.get(url, {
    responseType: "arraybuffer",
  });

  return sharp(response.data);
}

async function toFile(image, fileName) {
  await image.toFile(fileName);
}

async function flipImageXYFromUrl(url) {
  const image = await getImage(url);
  const flippedImage = await flipXY(image);
  await toFile(flippedImage, "test.jpg");
}

flipImageXYFromUrl(
  "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf"
);

module.exports = {
  flipXY,
  getImage,
  flipImageXYFromUrl,
  toFile,
};
