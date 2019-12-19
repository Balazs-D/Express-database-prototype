const {
  getAllFlats,
  getIdFlat,
  createNewFlat,
  updateFlat,
  deleteFlat
} = require('../controllers/flats');

const express = require('express');
const router = express.Router();

// ?  =================================================== Routes - await, async

router.get('/', getAllFlats);

router.get('/:id', getIdFlat);

router.post('/', createNewFlat);

router.patch('/:id', updateFlat);

router.delete('/:id', deleteFlat);

module.exports = router;
