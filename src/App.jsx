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
        <Navbar className="navBar" bg="dark" variant="dark">
          <Navbar.Brand className="headerNav" href="/Home"> 
            Primo APP Pages
          </Navbar.Brand>
          <Nav.Link className="appLinks" href="/">
          </Nav.Link>
        </Navbar>
        <Route exact path="/Home" render={() => <Home Home ={Home} /> }/> 
      </div>
    </BrowserRouter>
  )
}
}

export default App;
