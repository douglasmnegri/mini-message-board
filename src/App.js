import { useEffect, useState } from "react";
import { getMessages } from "./services/messageService";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then((data) => setMessages(data))
      .catch((error) => console.error("Erro ao buscar mensagens:", error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Board</h1>
      </header>
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
    </div>
  );
}

export default App;
