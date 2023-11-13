const express = require('express');
const router = express.Router();
const Inmueble = require('../models/inmueble');
const { ObjectId } = require('mongodb');


// Ruta para obtener una lista de todos los inmuebles
router.get('/get_inmuebles', async (req, res) => {
  try {
    const inmueble = await Inmueble.find({}).toArray();;
    res.json(inmueble);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para crear un nuevo inmueble
router.post('/post_inmueble', async (req, res) => {
  try {
    const inmuebleData = req.body; // Datos del inmueble desde la solicitud
    const inmueble = await Inmueble.insertOne(inmuebleData);
  
    res.status(201).json(inmueble);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta para actualizar un inmueble por su ID
router.put('/put_inmueble_with_id/:id', async (req, res) => {
  try {
    const inmueble = await Inmueble.updateOne(
      { _id: new ObjectId(req.params.id) },
      { $set: req.body },
      { upsert: false }
  )
    if (inmueble.modifiedCount == 0) {
      return res.status(404).json({ error: 'No se pudo actualizar el Inmueble. Inmueble no encontrado, o ya actualizado' });
    }
    res.json(inmueble);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Ruta para borrar un inmueble por su ID
router.delete('/delete_inmueble_with_id/:id', async (req, res) => {
  try {
    const result = await Inmueble.deleteOne( { _id: new ObjectId(req.params.id) } )
    console.log(result)
    if (result.deletedCount == 0) {
      return res.status(404).json({ error: 'No se pudo eliminar el Inmueble. Inmueble no encontrado' });
    }
    res.json({"message:":`Object with id: ${new ObjectId(req.params.id)} deleted`})
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
