import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer id="footer">
          <div className="container footer-contact">
            <h2 className="mt-footer footer-title elegant">Arturo Filio</h2>
            <p>Phone: (305) 586-4304</p>
            <p>Email: filioarturo@gmail.com</p>
            <p>848 Brickell Key Dr. apt #3304</p>
          </div>
          <div className="container footer-block">
            <div className="row">
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-facebook" />
                </a>
              </div>
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-linkedin" />
                </a>
              </div>
              <div className="col-md-4 col-4">
                <a href="">
                  <i className="fab fa-3x fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
