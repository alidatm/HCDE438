/* javascript for chatter app interface */
import "./App.css";
import TextInput from "./TextInput";
import { useState } from "react";
import Message from "./Message";
import React from 'react';
import Camera from 'react-snap-pic'

function App() {
  const [showCamera, setShowCamera] = useState(false)
  const [messages, setMessages] = useState([]);
  function sendMessage(text) {
    const newMessage = {
      text,
      time: Date.now(),
      user: "Alida"
    };
    setMessages([newMessage, ...messages]);
  }
  console.log(messages);

  let takePicture = (img) => {
    console.log(img)
    setShowCamera(false)
  }
  
  return (
    <div className="App"> 
      {showCamera && <Camera takePicture={takePicture} />}
      <header className="header">
        <div className="logo"/>
        <span className="title">CHATTER!</span>
      </header>
      <div className="messages">
        {messages.map((msg) => {
        return <Message {...msg} />;
      })}
    </div>
    <TextInput sendMessage={sendMessage} 
               showCamera={()=>setShowCamera(true)}
    />
  </div>
  );
}

export default App;
