let http = require("http"); //http package used to access the server related functions
let fileSystem = require("fs-extra"); //filesystem package that is used to access file promises
let colorPalette = require("./color-palette.json"); //Loaded the require json file into a variable

//Async Function used to read a file from a specific path and returns the said file back
async function readFromFile(path) {
  try {
    const file = await fileSystem.readFile(path, "utf-8");
    return file;
  } catch (err) {
    console.log(err);
  }
}

//Async Function used to write the random generated colors into a file
async function writeToFile(JSONData) {
  try {
    await fileSystem.writeFile(
      "./random-colors.json",
      JSON.stringify(JSONData)
    );
  } catch (err) {
    console.log(err);
  }
}

//Async Function used to generate random colors that are unique
async function generateRandomColors() {
  try {
    let colorsArray = JSON.parse(await readFromFile("./color-palette.json"));
    var randomColorsArray = [];
    while (randomColorsArray.length < 5) {
      var randomPalette = Math.floor(Math.random() * colorPalette.length);
      randomColorsArray.push(colorsArray[randomPalette]);
      randomColorsArray = randomColorsArray.filter(
        (value, index, array) => array.indexOf(value) === index
      );
    }
    writeToFile(randomColorsArray);
  } catch (err) {
    console.log(err);
  }
}

//Creation of server and writing the colors generated from the file into the server response
http
  .createServer(async (req, res, err) => {
    try {
      generateRandomColors();
      const fileData = await readFromFile("./random-colors.json");
      res.write(fileData);
      res.end();
    } catch (err) {
      res.write(err);
    }
  })
  .listen(4000);
