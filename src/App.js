import logo from './poddle.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eyeless poddle says it's an 8.
        </p>
        <div>(p.s. put some eyes on your dogs)</div>
      </header>
    </div>
  );
}

export default App;
