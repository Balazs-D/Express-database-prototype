// ?  =================================================== File setup

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const router = require('./routes/flats')

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

// ?  =================================================== Router Middleware

app.use('/flat', router);

// ?  =================================================== Error handling

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).send({
    error: err.message
  });
});

// ?  =================================================== Main route


app.get('/', (req, res) => {
  res.send('Hello!');
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






