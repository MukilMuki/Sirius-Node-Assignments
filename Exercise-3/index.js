const http=require('http')
const winston = require('winston');
const fs = require('fs');

const logger = winston.createLogger({
    level: 'error',
    format: winston.format.json(),
    transports: [new winston.transports.File({
        filename: 'combined.log',
      }),],
  });

http.createServer((req,res,err)=>{
  
    try {
        fs.writeFile("./samplee.json", "Hi", (err, data) => {
            if(err) {
                logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
            }
            else
                res.write("File Found");
        })
    } catch(err) {
        console.log(err);
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
    }
}).listen(4000);


