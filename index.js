require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const produtoRoutes = require('./src/routes/productRoute');

const app = express();

// Conectar ao MongoDB Atlas
const dbUrl = process.env.MONGODB_URI;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Conexão com MongoDB Atlas estabelecida'))
.catch(error => console.error('Erro na conexão com MongoDB:', error));

app.use('/uploads', express.static('uploads'));
app.use('/api', produtoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});