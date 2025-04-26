const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

// Rota GET para mostrar o formulário
app.get("/new", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "form.html"));
});

// Rota POST para receber dados do formulário
app.post("/new", (req, res) => {
  const { user, text } = req.body;
  const newMessage = {
    text,
    user,
    added: new Date(),
  };


  messages.push(newMessage);

  // Retorna a lista de mensagens (ou pode redirecionar para a lista)
  res.redirect("/messages");
});

app.get("/messages", (req, res) => {
  res.json(messages);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
