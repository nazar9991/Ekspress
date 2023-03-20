const express = require('express');
const app = express();
const port = 4000;


app.get('/', function( res){
    res.send('Hello');
});

app.get('/about', function( res){
res.send('<h2><i>Nazar Voroniak</i></h2>');
});


app.use((err,  res, )=>{
    console.log(err);
    res.status(500).send('Error');
});


const fs = require ('fs');
app.get ('/Information', ( res) => {
    fs.readFile('index.html', 'utf-8', (err, html) => {
        if (err) {
            console.log(err);
            res.status(500).send('Error');
          }
          res.send (html);
    });
});

// //  **
app.use (express.static('image'));
app.get ('/ILikeDogs', ( res) => {
    res.sendFile(__dirname + '/image/index.html');
});


app.listen(port, function(){
    console.log('running');
});