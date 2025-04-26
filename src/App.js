import { useEffect, useState } from "react";
import { getMessages } from "./services/messageService";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    getMessages()
      .then((data) => setMessages(data))
      .catch((error) => console.error("Erro ao buscar mensagens:", error));
  }, []);

  // Função para enviar a mensagem
  const handleSubmit = (event) => {
    event.preventDefault();

    const newMessage = { user, text };

    axios
      .post("http://localhost:3000/new", newMessage)
      .then(() => {
        // Limpar o formulário e recarregar as mensagens
        setUser("");
        setText("");
        return getMessages();
      })
      .then((data) => setMessages(data))
      .catch((error) => console.error("Erro ao enviar mensagem:", error));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
      </header>

      {/* Exibição das mensagens */}
      <div className="message-board">
        {messages.length === 0 ? (
          <p>No messages yet...</p>
        ) : (
          messages.map((msg, idx) => (
            <div key={idx} className="message">
              <h3>{msg.user}</h3>
              <p>{msg.text}</p>
              <small>{new Date(msg.added).toLocaleString()}</small>
            </div>
          ))
        )}
      </div>

      {/* Formulário para enviar novas mensagens */}
      <div className="message-form">
        <h2>Send a New Message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">Author:</label>
          <input
            type="text"
            id="user"
            name="user"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
          />
          <br />
          <label htmlFor="text">Message:</label>
          <textarea
            id="text"
            name="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <br />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default App;
