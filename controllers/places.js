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

//NEW
router.get('/new', (req,res)=>{
  res.render('places/new');
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
  })
});

//COMMENT
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


//CREATE-NEW
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(()=>{
    res.redirect('/places');
  })
  .catch(err =>{
    console.log('err', err);
    res.render('error404');
  })
});

// router.post('/:id/rant', (req,res)=>{
//   res.send('GET /places/:id/rant stub');
// });

// router.delete('/:id/rant/:rantId', (req,res)=>{
//   res.send('GET /places/:id/rant/:rantId stub');
// });


module.exports = router;

