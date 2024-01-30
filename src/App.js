import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
      </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
