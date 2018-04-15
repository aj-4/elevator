const db = require('./db');
let roomCounter = 0;

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

if (process.env.NODE_ENV !== 'production'){
    const webpack = require('webpack');
    const webpackDevMiddleware = require('webpack-dev-middleware');
    const webpackConfig = require('../webpack.config');
    app.use(webpackDevMiddleware(webpack(webpackConfig)));
} else {
    app.use(express.static('dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname + '../dist/index.html'));
    });
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;

// app.use(express.static(__dirname)); 

app.post('/roomList', (req, res) => {
    if (db.length) {
        let nxtRoom = db.shift();
        db.push(req.body);
        nxtRoom.roomId = roomCounter % 2 === 0 ? roomCounter : roomCounter - 1;
        console.log('matched', req.body.name, 'with', nxtRoom, 'room id', nxtRoom.roomId);  
        roomCounter++;              
        res.status(200).send(nxtRoom);
    } else {
        db.push(req.body);
        let setId = setInterval(() => {
            console.log('polling for...');
            if (db.length && db[0].name !== req.body.name) {
                clearInterval(setId);                
                let nxtRoom = db.shift();
                nxtRoom.roomId = roomCounter % 2 === 0 ? roomCounter : roomCounter - 1;
                console.log('matched', req.body.name, 'with', nxtRoom, 'room id', nxtRoom.roomId);  
                roomCounter++;              
                res.status(200).send(nxtRoom);
            }
        }, 5000)
    }
})

app.listen(PORT, () => console.log('listening on port' + PORT)); 