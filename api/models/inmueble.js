const mongo = require('../db/db');

const Inmueble = mongo.db('inmuebleDB').collection('inmuebles');

//los datos se guardaran en compose con el nombre de coleccion: inmuebles
//esto es debido a como mongo trabaja la creacion de colleciones

module.exports = Inmueble;