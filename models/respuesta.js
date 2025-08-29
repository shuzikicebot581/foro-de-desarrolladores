const mongoose = require('mongoose');

const RespuestaSchema = new mongoose.Schema({
  contenido: {
    type: String,
    required: true
  },
  autor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
  },
  topico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topico',
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Respuesta', RespuestaSchema);
