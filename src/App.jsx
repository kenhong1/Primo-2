import React, {Component} from "react"
import './App.css';
import Home from "./Pages/home";
import {BrowserRouter, Route, Link} from "react-router-dom";
import WhiteonBlacklogo from "./Images/WhiteonBlack.png";
import {Navbar, Nav, Image} from "react-bootstrap"; 

class App extends Component {
render(){

  return(
    <BrowserRouter>
      <div className="App">
      <Nav.Link className="navBar"  href="/Home">HOME </Nav.Link>
        <div className="appBox">
        <Route exact path="/Home" render={() => <Home Home ={Home} /> }/> 
        </div>
      </div>
    </BrowserRouter>
  )
}
}

export default App;
