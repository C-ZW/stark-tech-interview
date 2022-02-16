const util = require("../index");
const fs = require("fs");
const sharp = require("sharp");

var assert = require("assert");

const url = "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should be sharp instance", async function () {
      const imageBuffer = await util.getImage(
        "https://images.unsplash.com/photo-1631086459990-06bc4d7ad6cf"
      );

      assert.equal(imageBuffer instanceof sharp, true);
    });

    it("should be save file", async function () {
      const imageBuffer = await util.getImage(url);
      const fileName = "testImage.jpg";
      await util.toFile(imageBuffer, fileName);
      assert.equal(fs.existsSync(fileName), true);
    });

    it("should be flipXY", async function () {
      const image = await getImage(url);
      const flippedImage = await flipXY(image);
    });
  });
});
