require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const viewsPath = path.join(__dirname, '../templates');
const partialsPath = path.join(__dirname, '../templates/partials');

app.use(express.static(path.join(__dirname,'../public')));

app.set('view engine', 'hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);


app.listen(3000,()=>{
    console.log('server is listening on port 3000');
});

app.get('/', (req, res)=>{

    res.render('home');
});