let http = require('http');
let fileSystem = require('fs');
const logger = require('winston');

http.createServer((req,res,err)=>{
try {
    fileSystem.readFile("./testfile.json", 'utf-8', (err, data) => {
        if (err) {
            logger.eror($(err.status || 500) - $(res.statusMessage) - $(err.message) - $(req.originalUrl) - $(req.method) - $(req.ip));
            res.status(500).send("file not found");
        }
        else
            res.send("File found");
    })
}
catch (err) {

}
});