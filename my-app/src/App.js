//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function Subject() {
  return (
    <header>
      <h1>Web</h1>
      world wide web
    </header>
  );
}

class Nav extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">1.html</a></li>
          <li><a href="1.html">1.html</a></li>
          <li><a href="1.html">1.html</a></li>
          <li><a href="1.html">1.html</a></li>
        </ul>
      </nav>
    );
  }
}

function App() {
  return (
    <div className="App">
    
      <Subject></Subject>  
    </div>
  );
}



export default App;
