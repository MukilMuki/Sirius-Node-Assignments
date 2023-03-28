let fileSystem = require('fs');
let color_palette = require('./color_palette.json');
let i = 0
for (i = 0; i < 5; i++) {
    var randomPalette = Math.floor(Math.random() * color_palette.length);
    fileSystem.appendFile("random-colors.txt", JSON.stringify(color_palette[randomPalette]) + "\n", (err) => {
        if (err)
            console.log("Color didnt get appended");
        else
            console.log("Color got added");
    });
}
fileSystem.readFile("random-colors.txt", 'utf-8', (err, data) => {
    if (err)
        console.log("Coudlnt read file");
    else
        console.log(data);
})
