import { Routes, Route, Link } from "react-router-dom";
import * as React from "react";
import Login from './components/Login';
import Game from './components/Game';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Game' element={<Game />} />
      </Routes>

    </div>
  )
}

export default App;
