const Produto = require('../models/productModel');

exports.criarProduto = async (req, res) => {
  const { categoria, preco } = req.body;
  const imagem = req.file.filename;

  try {
    const novoProduto = await Produto.create({ imagem, categoria, preco });
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ mensagem: 'Erro ao criar produto' });
  }
};