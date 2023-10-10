// app.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const port = process.env.PORT || 3400;
app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}`);
});
