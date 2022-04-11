import "./App.css";
import { useState } from "react";
function App() {
  const [message, setMessage] = useState("");
  const [messageToSend, setMessageToSend] = useState("");
  const inputButton = () => {
    setMessageToSend(message);
    setMessage("")
  };
  const valueInput = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  return (
    <div className="container-box">
      <h1>A Message You Would Like To Pass</h1>
      <input value={message} onChange={(e) => valueInput(e)} />
      <div className="messageToSent">
        <button className="btn" onClick={() => inputButton()}>
          Оправить
        </button>
        <h1>Last Message Delivered</h1>
        <h3>{messageToSend}</h3>
      </div>
    </div>
  );
}

export default App;
