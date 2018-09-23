import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Components
import Navbar from './components/layout/Navbar';
import Landing from './components/landing/Landing';
import Footer from './components/footer/Footer';
import AboutMe from './components/about-me/AboutMe';
import ContactMe from './components/contact-me/ContactMe';
import MyServices from './components/my-services/MyServices';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/aboutMe" component={AboutMe} />
          <Route exact path="/contactMe" component={ContactMe} />
          <Route exact path="/myServices" component={MyServices} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
