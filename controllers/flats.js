const Flat = require('../models/flat');

// ?  =================================================== Routes - await, async

const getAllFlats = async function(req, res, next) {
  try {
    let flat = await Flat.find();
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const getIdFlat = async function(req, res, next) {
  let id = req.params.id;

  try {
    let flat = await Flat.findById(id);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const createNewFlat = async function(req, res, next) {
  try {
    let flat = await Flat.create(req.body);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const updateFlat = async function(req, res, next) {
  try {
    let flat = await Flat.findByIdAndUpdate(id, req.body);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

const deleteFlat = async function(req, res, next) {
  try {
    let flat = await Flat.findByIdAndDelete(req.params.id);
    res.send(flat);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllFlats, getIdFlat, createNewFlat, updateFlat, deleteFlat }
