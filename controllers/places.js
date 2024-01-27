const router = require('express').Router();
const places = require('../models/places');

router.get('/new', (req,res)=>{
  res.render('places/new');
});

//SHOW
router.get('/:id', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)){
    res.render('error404');
  }else if(!places[id]){
    res.render('error404');
  }else{
    res.render('places/show',{place:places[id], id});
  }
});

//EDIT
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id);
  if (isNaN(id)){
    res.render('error404');
  }else if(!places[id]){
    res.render('error404');
  }else{
    res.render('places/edit',{place:places[id]});
  }
});

//UPDATE
router.put('/:id', (req,res)=>{
  places[req.params.id] = req.body;
  res.send('hha');
});

//DELETE
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404');
  }
  else if (!places[id]) {
    res.render('error404');
  }
  else {
    places.splice(id, 1);
    res.redirect('/places');
  }
});

//INDEX
router.get('/', (req, res) => {
    res.render('places/index',{places});
    // res.send('GET /places');
});


//NEW
router.post('/', (req, res) => {
  if (!req.body.pic) {
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body);
  res.redirect('/places');
});


module.exports = router;

