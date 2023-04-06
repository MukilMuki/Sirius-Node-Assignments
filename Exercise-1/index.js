let fileSystem = require("fs");
let colorPalette = require("./color-palette.json");

function writeToFile() {
  let colorsArray = JSON.parse(
    fileSystem.readFileSync("./color-palette.json", "utf-8")
  );
  var randomColorsArray = [];
  var unique = [];
  while (unique.length < 5) {
    var randomPalette = Math.floor(Math.random() * colorPalette.length);
    randomColorsArray.push(colorsArray[randomPalette]);
    unique = randomColorsArray.filter(
      (value, index, array) => array.indexOf(value) === index
    );
  }
  fileSystem.writeFileSync("./random-colors.json", JSON.stringify(unique));
}

writeToFile();

const data = fileSystem.readFileSync("./random-colors.json", "utf-8");
console.log(data);
