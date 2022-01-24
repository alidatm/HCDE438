/* javascript for chatter app interface */
import "./App.css";

function App() {
  return <div className="App">
    <header className="header">
      <img className="logo"/>
      <span className="title">CHATTER!</span>
    </header>
    <footer className="footer">
        <input className="text-input" />
        <button className="send">↑</button>
      </footer>
  </div>;
}

export default App;
