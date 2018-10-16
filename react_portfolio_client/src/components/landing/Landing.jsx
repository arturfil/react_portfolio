import React, { Component } from 'react';

import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2 className="mt-landing h2-landing display-3 mb-4">
                  Arturo Filio
                  <br />
                  Software Engineer
                </h2>
                <p className="lead"> It's all in the detail</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
