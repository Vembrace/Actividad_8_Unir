const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const inmueblesRoutes = require('./api/routes/inmuebles');

app.use(bodyParser.json());

app.use('/api', inmueblesRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal en el server !.(');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
