import React, { Component } from 'react';

import './Projects.css';
import machine1 from '../../img/aaexport.png';
import machine2 from '../../img/gruposeri.png';
import machine3 from '../../img/devconnector.png';
import machine4 from '../../img/spottit.png';
import machine5 from '../../img/usedmkt.png';
import machine6 from '../../img/burgerbuilder.png';

class Projects extends Component {
  render() {
    return (
      <div>
        <div className="our-services">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="mt-5 mb-4 h2-ourservices p-ourservices" />
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <div className="fluid-container info-block">
          <h2 className="text-center title">My Projects</h2>
          <hr className="basic" />
          <p className="text-center intro">
            This are some of my projects that I have done for myself and some
            clients. And these are my focuses in these projects
          </p>

          <div className="row title-paragraphs">
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-desktop os-icon fa-4x" />
              <h5>Front-End</h5>
            </div>
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-database fa-4x os-icon" />
              <h5>Full Stack Web Apps</h5>
            </div>
            <div className="col-md-4 col-sm-12">
              <i className="fas fa-palette fa-4x os-icon" />
              <h5>Design</h5>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a href="http://aaexport.co" target="_blank">
                <img
                  className="img-size m2"
                  src={machine1}
                  alt=""
                  ref="aaexport.co"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a href="http://www.gruposeri.mx" target="_blank">
                <img
                  className="img-size m2"
                  src={machine2}
                  alt=""
                  ref="www.gruposeri.mx"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a href="https://devconector.herokuapp.com/" target="_blank">
                <img
                  className="img-size m2"
                  src={machine3}
                  alt=""
                  ref="https://devconector.herokuapp.com"
                />
              </a>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a href="https://spottit.herokuapp.com/" target="_blank">
                <img
                  className="img-size m2"
                  src={machine4}
                  alt=""
                  ref="https://spottit.herokuapp.com"
                />
              </a>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a href="http://usedmkt.co" target="_blank">
                <img
                  className="img-size m2"
                  src={machine5}
                  alt=""
                  ref="usedmkt.co"
                />
              </a>
            </div>

            {/* <div
              className="flip-container"
              ontouchstart="this.classList.toggle('hover');"
            >
              <div className="flipper">
                <div className="front">
                  <div className="container">
                    <h4>Contact_name</h4>
                    <p>
                      <i className="large material-icons special">
                        account_circle
                      </i>
                    </p>
                    <p>
                      <i className=" material-icons">face</i>5 Users Online
                    </p>
                    <p className="bottom">Online</p>
                  </div>
                </div>
                <div className="back">
                  <div className="container">
                    <p>
                      User online correspond to people connected on your network
                    </p>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="col-lg-4 col-md-12 col-sm-12 col-12">
              <a
                href="https://burger-builder-6dbc5.firebaseapp.com/"
                target="_blank"
              >
                <img
                  className="img-size m2"
                  src={machine6}
                  alt=""
                  ref="https://burger-builder-6dbc5.firebaseapp.com/"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
