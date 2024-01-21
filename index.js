require('dotenv').config();

const express = require('express');

app.use('/places',require('./controllers/places'))

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!')
});

app.get('*',(req,res)=>{
    res.status(404).send('<h1>This is a happy 404 error.</h1>')
})

app.listen(process.env.PORT);
