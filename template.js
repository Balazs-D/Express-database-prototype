
// ?  =================================================== File setup

const express = require('express');
const app = express();
const mongoose = require('mongoose');



// ?  =================================================== Mongoose database schema

const flatSchema = new mongoose.Schema({
  // fullAddress: {
  //   type: String, required: true
  // },
  fullAddress: {
    streetNr: Number,
    zipcode: Number,
    city: String,
    country: String,
  },
  district: String,
  area_sqm: Number,
  rooms: {
    type: Number,
    default: 1
  },
  rent: Number,
  landlord: String
});

const Flat = mongoose.model('flat', flatSchema);

// ?  =================================================== Mongoose connection

mongoose.connect('mongodb://localhost/flat', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// ?  =================================================== CURS 


app.use((req, res, next) => {
  res.set('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
  res.set('ACCESS-CONTROL-ALLOW-HEADERS', '*');
  res.set('ACCESS-CONTROL-ALLOW-METHODS', '*');
  next();
});

// ?  =================================================== Parsing


app.use(express.json());

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({
    error: err.message
  });
});

// ?  =================================================== Routes - await, async


app.get('/', (req, res) => {
  res.send('Hello!');
});

app.get('/flat', async function (req, res, next){
  
    try{
      let flat = await Flat.find()
      res.send(flat)
  }
    catch(err){next(err)}
    
});

app.get('/flat/:id', async function (req, res, next){
    let id = req.params.id;

    try{

      let flat = await Flat.findById(id)
      res.send(flat)

  }
    catch(err){next(err)};
});

app.post('/flat', async function (req, res, next){

  try{

    let flat = await Flat.create(req.body)
    res.send(flat)
  }
    catch(err){next(err)}
 
});

app.patch('/flat/:id', async function (req, res, next) {

  try{
    
    let flat = await Flat.findByIdAndUpdate(id, req.body)
    res.send(flat)
  }

      catch(err){next(err)}


  
});

app.delete('/flat/:id', async function (req, res, next){

  try{
    let flat = await Flat.findByIdAndDelete(req.params.id)
    res.send(flat)
  }
 
        catch(err){next(err)}

});

// ?  =================================================== Port Setup


let port = 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

// ! ======================================= .then & .catch

// app.get('/', (req, res) => {
//   res.send('Hello!');
// });

// app.get('/flat', (req, res, next) => {
//   Flat.find()
//     .then(flats => res.send(flats))
//     .catch(err => next(err));

// });

// app.get('/flat/:id', (req, res, next) => {
//   Flat.findById()
//     .then(flats => res.send(flats))
//     .catch(err => next(err));
// });

// app.post('/flat', (req, res, next) => {
//   Flat.create(req.body)
//     .then(flats => res.send(flats))
//     .catch(err => next(err));
// });

// app.patch('/flat/:id', (req, res, next) => {
//   Flat.findByIdAndUpdate(req.params.id, req.body)
//   .then(flats => res.send(flats))
//   .catch(err => next(err))
// });

// app.delete('/flat/:id', (req, res, next) => {
//   Flat.findByIdAndDelete(req.params.id)
//   .then(flats => res.send(flats))
//   .catch(err => next(err))
// });

// let port = 3000;
// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`);
// });






