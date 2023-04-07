let fileSystem = require("fs");
let colorPalette = require("./color-palette.json");

function writeToFile() {
  try {
    let colorsArray = JSON.parse(
      fileSystem.readFileSync("./color-palette.json", "utf-8")
    );
    if (colorsArray.length > 5) {
      var randomColorsArray = [];
      var uniqueColorsArray = [];
      while (uniqueColorsArray.length < 5) {
        var randomPalette = Math.floor(Math.random() * colorPalette.length);
        randomColorsArray.push(colorsArray[randomPalette]);
        uniqueColorsArray = randomColorsArray.filter(
          (value, index, array) => array.indexOf(value) === index
        );
      }
      fileSystem.writeFileSync(
        "./random-colors.json",
        JSON.stringify(uniqueColorsArray)
      );
    } else {
      console.log("The Palette should atleast have 5 colors in it!");
    }
  } catch (err) {
    console.log(err);
  }
}

writeToFile();

const fileData = fileSystem.readFileSync("./random-colors.json", "utf-8");
console.log(fileData);
