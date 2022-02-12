/* javascript for chatter app interface */
import "./App.css";
import TextInput from "./TextInput";
import React, { useState } from "react";
import Message from "./Message";
import { use100vh } from "react-div-100vh";
// import Camera from 'react-snap-pic'
import NamePicker from "./NamePicker";
import { useDB, db } from "./db";

function App() {
  const height = use100vh();
  const messages = useDB();
  
    // our username
    let [username, setUsername] = useState("");

    // "sendMessage" runs whenver we click the send button
    function sendMessage(text) {
      if (!text.trim()) return;
      // we'll create a new message object
      const newMessage = {
        text: text,
        time: Date.now(),
        user: username,
      };
      db.send(newMessage);
    }

    // every time state changes, React "re-renders"
    // so this console.log will run again
    console.log(messages);
 
  // const [showCamera, setShowCamera] = useState(false)
  // const [messages, setMessages] = useState([]);
  // function sendMessage(text) {
  //   const newMessage = {
  //     text,
  //     time: Date.now(),
  //     user: "Alida"
  //   };
  //   setMessages([newMessage, ...messages]);
  // }
  // console.log(messages);

  // let takePicture = (img) => {
  //   console.log(img)
  //   setShowCamera(false)
  // }
  
  return (
    <div 
    className="App"
    style={{ height: height, minHeight: height, maxHeight: height }}
    > 
      {/* {showCamera && <Camera takePicture={takePicture} />} */}
      <header className="header">
        <div className="logo"/>
        <span className="title">CHATTER!</span>
        <NamePicker setUsername={setUsername} />
      </header>
      <div className="messages">
        {messages.map((msg, i) => {
          // loop over every message in the "messages" array
          // and return a Message component
          // we are "spreading" all the items in "msg" into the props
          // "key" needs to be a unique value for each item
          return <Message {...msg} key={i} fromMe={msg.user === username} />;
        })}
      </div>
      {/* <div className="messages">
        {messages.map((msg) => {
        return <Message {...msg} />;
      })}
    </div> */}
    <TextInput sendMessage={sendMessage} 
              //  showCamera={()=>setShowCamera(true)}
    />
  </div>
  );
}

export default App;
