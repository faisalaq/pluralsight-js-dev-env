import express from 'express';
import open from 'open';
import path from 'path';
import webpack from 'webpack';
import config from '../webpack.config.dev';

const port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler,{
	noInfo:true,
	publicPath: config.output.publicPath
}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "../src/index.html"));
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
