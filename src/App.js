import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/User">User</Link>
      </header>

      <Routes>
      <Route path="/" component={Home}></Route>
      <Route path="/User" component={User}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
