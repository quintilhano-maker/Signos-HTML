const express = require('express');
const app = express();
const port = 3000;

// Servir arquivos estáticos da pasta 'public'
app.use(express.static('public/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});