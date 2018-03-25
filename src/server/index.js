const db = require('./db');

const express = require('express');
const app = express();

app.use(express.static(__dirname + './../../')); 
app.listen(4000, () => console.log('listening on port 4000')); 