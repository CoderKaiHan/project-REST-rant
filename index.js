require('dotenv').config();
const express = require('express');
const methodOverride = require('method-override');

const app = express();

app.set('views', './views');
app.set('view engine', 'jsx');
app.engine('jsx',require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

//Controllers & Routes
app.use('/places',require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
    // res.send('Hello world!')
});

app.get('*',(req,res)=>{
    res.status(404).render('error404');
    // res.status(404).send('<h1>This is a happy 404 error.</h1>');
});

app.listen(process.env.PORT);
