import React, { Component } from 'react';

import './Projects.css';
import machine1 from '../../img/mexico_city_bellas_artes.jpeg';
import machine2 from '../../img/mexico_city_bellas_artes.jpeg';
import machine3 from '../../img/mexico_city_bellas_artes.jpeg';
import machine4 from '../../img/mexico_city_bellas_artes.jpeg';
import machine5 from '../../img/mexico_city_bellas_artes.jpeg';
import machine6 from '../../img/mexico_city_bellas_artes.jpeg';
import machine7 from '../../img/mexico_city_bellas_artes.jpeg';
import machine8 from '../../img/mexico_city_bellas_artes.jpeg';
import machine9 from '../../img/mexico_city_bellas_artes.jpeg';

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
        <div className="container info-block">
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
            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine1} alt="" />
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine2} alt="" />
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine3} alt="" />
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine4} alt="" />
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine5} alt="" />
            </div>

            <div className="col-md-4 col-sm-12 col-12">
              <img className="img-size m2" src={machine6} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
