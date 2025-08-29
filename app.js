const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to enable CORS and parse JSON requests
app.use(cors());
app.use(bodyParser.json());

// Connecting to MongoDB
// This connection string connects to the local MongoDB instance on the 'foro' database.
mongoose.connect('mongodb://localhost:27017/foro', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
    process.exit(1); // Exit the process if the connection fails
  });

// Define routes
app.get('/', (req, res) => {
  res.send('Bienvenido al Foro de Desarrolladores');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Ha ocurrido un error en el servidor.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});