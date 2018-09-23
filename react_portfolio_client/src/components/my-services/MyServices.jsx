import React, { Component } from 'react';

import './MyServices.css';
import seoImage from '../../img/seo-marketing.jpeg';
import webDevelopment from '../../img/web_development.jpg';

class MyServices extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="s-title">My Services</h2>
          <p className="p-title">
            All My Services Are custom made to specific client's needs!
          </p>
        </div>
        <div className="container-fluid">
          <div className="row services-block">
            <div className="col-md-6 right">
              <img className="s-image" src={webDevelopment} alt="" />
            </div>
            <div className="col-md-6 left">
              <h2>Web Developemnt</h2>
            </div>
          </div>
          <div className="row services-block">
            <div className="col-md-6 right">
              <h2>Custom Software Creation</h2>
            </div>
            <div className="col-md-6 left">
              <img className="s-image" src={seoImage} alt="" />
            </div>
          </div>
          <div className="row services-block">
            <div className="col-md-6 right">
              <img className="s-image" src={seoImage} alt="" />
            </div>
            <div className="col-md-6 left">
              <h2>SEO Marketing</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyServices;
