import logo from "./logo.svg";
import "./App.css";
import { getMessages } from "./services/messageService";
import { useEffect, useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    getMessages()
      .then((data) => setMessages(data))
      .catch((error) => console.error("Erro ao buscar mensagens:", error));
  }, []);

  console.log(messages)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
