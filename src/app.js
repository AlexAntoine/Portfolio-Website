require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');
const {sendEmail} = require('../email/message');

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

/***** GET ROUTES ******/

app.get('/', (req, res)=>{

    res.render('home',{
        title:'Hello, I\'m Don-Alex'
    });
});

app.get('/post', (req,res)=>{
    
    res.render('post',{
        postTitle: 'Projects'
    });
});

app.get('/post/daily-journal', (req, res)=>{

    res.render('daily-journal');
});

app.get('/post/chat-app', (req, res)=>{
    res.render('chat-app')
})

app.get('/post/todo', (req, res)=>{
    
    res.render('todo');
})

// app.post('/', (req, res)=>{

//     console.log(req);

//     const {email, subject, message} = req.body;

//     sendEmail(email,subject, message);

//     res.redirect('/');

// });