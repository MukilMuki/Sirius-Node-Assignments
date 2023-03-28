let express= require ('express');
let app=express();
let cors=require('cors');

app.use(cors(
    {
        origin: ['http://localhost:4000','http://127.0.0.1:5500/sirius-locations/index.html'],
    }
));
app.listen(4000);