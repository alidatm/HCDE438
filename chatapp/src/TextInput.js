import React from "react";
import "./TextInput.css";
import { useState } from "react";
import { FiSend} from 'react-icons/fi';


function TextInput(props) {
  const [text, setText] = useState("");

  function send() {
    props.sendMessage(text);
    setText("");
  }
  function onKeyPress(e) {
    if (e.key === "Enter") {
      send();
    }
  }

  return (
    <footer className="footer">
    <input
      className="text-input"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyPress={onKeyPress}
    />
    <button className="send" onClick={send}>
      <FiSend />
    </button>
  </footer>
);



  //   <footer className="footer">
  //     <button onClick={props.showCamera}
  //       style={{left:10, right:'auto'}}>
  //       <FiCamera style={{height:15, width:15}} />
  //     </button>
  //     <input
  //       className="text-input"
  //       value={text}
  //       onChange={(e) => setText(e.target.value)}
  //       onKeyPress={onKeyPress}
  //     />
  //     <button className="send" onClick={send}>
  //       <FiSend /> {/* ↑ */}
  //     </button>
  //   </footer>
  // );
}

export default TextInput;