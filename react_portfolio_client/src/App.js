import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
