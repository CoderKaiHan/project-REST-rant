const db = require('../models');

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/H_Thai_ML.jpg',
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/code_cat_cafe.jpg',
    founded: 2020
}])
.then(() =>{
    console.log('Success!');
    process.exit();
})
.catch(err =>{
    console.log('Failure!', err);
    process.exit();
})

