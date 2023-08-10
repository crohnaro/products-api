const express = require('express');
const multer = require('multer');
const produtoController = require('../controllers/productController');
const path = require('path');

const router = express.Router();
const storage = multer.diskStorage({
  destination: path.join(__dirname, '../uploads'),
  filename: (req, file, callback) => {
    callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

router.post('/produtos', upload.single('imagem'), produtoController.criarProduto);

module.exports = router;