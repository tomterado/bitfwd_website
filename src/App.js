import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Contact from './components/contact';
import Home from './components/home';
import Error from './components/error'
import Navigation from "./components/navigation";
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component ={Home}/>
            <Route path="/contact" component ={Contact}/>
            <Route component={Error} />
          </Switch>
          <Home/>
          <Footer />
        </div>

      </BrowserRouter>
    );
  }
}

export default App;