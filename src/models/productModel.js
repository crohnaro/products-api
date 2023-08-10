const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  imagem: String,
  categoria: String,
  preco: Number,
});

module.exports = mongoose.model('Produto', produtoSchema);