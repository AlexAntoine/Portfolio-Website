const express = require('express');
const { sendEmail } = require('../email/message');
const router = new express.Router();

router.get('/', (req, res)=>{

    res.render('home',{
        title:'Hello, I\'m Don-Alex'
    });
});

// router.get('/post', (req,res)=>{
    
//     res.render('post',{
//         postTitle: 'Projects'
//     });
// });

router.get('/post/daily-journal', (req, res)=>{

    res.render('daily-journal');
});

router.get('/post/chat-app', (req, res)=>{
    res.render('chat-app')
})

router.get('/post/todo', (req, res)=>{
    
    res.render('todo');
});

router.get('/post/devcamper',(req, res)=>{

    res.render('devcamper_api');
});

router.post('/email', (req, res)=>{
    const {email, subject, message,} = req.body;
    
    sendEmail(email, subject, message);

    res.redirect('/');
})


module.exports = router;