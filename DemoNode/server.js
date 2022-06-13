const config = require('config');
const startUpDebuger = require('debug')('app:startup');
const dbDebuger = require('debug')('app:db');
const morgan = require('morgan');
const helmet = require('helmet');
const Joi = require('joi');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

//console.log(`app: ${app.get('env')}`);

if(app.get('env')==='development'){
 app.use(morgan('tiny'));
 console.log('Morgan Enabled...');
}
//dbWork
dbDebuger('connected to database ...');

console.log('name :  '+config.get('name'));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));