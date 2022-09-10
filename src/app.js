require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const {sendEmail} = require('../email/message');
const pageRouters = require('../Router/routes');

const app = express();

const viewsPath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(path.join(__dirname,'../public')));
app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

const port = process.env.PORT|| 3000

app.listen(port,()=>{
    console.log(`Server is listening on ${port}`);
});

app.use('/', pageRouters);