import express from 'express';
import open from 'open';
import path from 'path';
import compression from 'compression';

const port = 3000;
var app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", function(req, res){
    res.json([
        {"id":1, "firstName":"Faisal", "lastName":"Qureshi"},
        {"id":2, "firstName":"Tommy", "lastName":"Lee"},
        {"id":3, "firstName":"Jerry", "lastName":"Ben"}
    ]);
});

app.listen(port, function(err){
    if(err){
        console.log(err); //eslint-disable-line no-console
    }else{
        open('http://localhost:'+port);
    }
});
