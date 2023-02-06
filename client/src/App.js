import './App.css';
import React from 'react' ;
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom' ;
import Navbar from './components/Navbar/Navbar';
import AllRoutes from './AllRoutes';
function App() {
  return (
    <div className="App">
      <Router>
         <Navbar/> 
         <AllRoutes/>
      </Router>
    </div>
  ); 
}

export default App;
