const router = require('express').Router();
const db = require('../models');

//INDEX
router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render('places/index', {places});
  })
  .catch(err =>{
    console.log(err);
    res.render('error404');
  })
});

//NEW GET ROUTE
router.get('/new', (req,res)=>{
  res.render('places/new');
});

//NEW POST ROUTE
router.post('/', (req, res) => {
  const { name, pic, cuisines, city, state, founded } = req.body;

  let picUrl = pic ? pic : 'http://placekitten.com/350/350'; 

  const newPlaceData = {
      name: name,
      pic: picUrl,
      cuisines: cuisines,
      city: city,
      state: state,
      founded: founded
  };

  db.Place.create(newPlaceData)
  .then(()=>{
    res.redirect('/places');
  })
  .catch(err =>{
    console.log('err', err);
    res.render('error404');
  })
});

//SHOW
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place =>{
    res.render('places/show', {place});
  })
  .catch(err =>{
    console.log('err', err);
    res.render('error404');
  })
});

//EDIT GET ROUTE
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/edit', {place});
  })
  .catch(err =>{
    console.log('err', err);
    res.render('error404');
  })
});

//EDIT PUT ROUTE
router.put('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    place.updateOne(req.body)
    .then(()=> {
      res.redirect(`/places/${req.params.id}`)
    })
    .catch(err =>{
      console.log('err', err);
      res.render('error404');
    })
  })
});

//COMMENT GET ROUTE
router.get('/:id/comment', (req,res) => {
  console.log(req.body);
  req.body.rant = req.body.rant ? true : false;
  db.Place.findById(req.params.id)
  .then(
    place => {
      res.render('places/comment', {place})
    }
  )
});

//COMMENT POST ROUTE
router.post('/:id/comment',(req,res) =>{
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.create(req.body)
    .then(comment =>{
      place.comments.push(comment.id)
      place.save()
      .then(() =>{
        res.redirect(`/places/${req.params.id}`);
      });
    })
    .catch(err => {
      res.render('error404');
    })
  })
  .catch(err =>{
    res.render('error404');
  })
});


//DELETE
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(deletedPlace => {
    res.redirect('/places')
  })
  .catch(err => {
    res.render('error404')
  })
});


module.exports = router;

