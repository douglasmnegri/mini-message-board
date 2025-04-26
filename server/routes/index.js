const express = require("express");
const cors = require("cors"); // Importa o CORS

const app = express();

// Habilita CORS para todas as requisições
app.use(cors());

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];
    
app.get("/", (req, res) => {
  res.json(messages);
});

app.get("/api/new", (req, res) => {
  res.json(messages);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
