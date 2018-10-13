import React, { Component } from 'react';

import './AboutMe.css';
import profilepic from '../../img/arturo_profile_pic.jpg';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <div className="about-us">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <p className="intro-p">A few things about myself...</p>
                </div>
                <div className="container title" />
              </div>
            </div>
          </div>
        </div>
        <div className="container paragraphs">
          <h2 className="h2-subTitle">Software Engineer</h2>
          <hr className="basic" />
          <div className="row">
            <div className="col-md-3 col-sm-6 col-6">
              <img className="profile-image" src={profilepic} alt="" />
            </div>
            <div className="col-md-9 col-sm-6 col-12">
              <p>
                I started programming long before I realized it was my passion,
                it all started with Python. I asked a friend in common which was
                the programming language that he would recomend for begginers to
                start and he pointed me towards Python which is where my
                programming journey started in 2014.
              </p>
              <p>
                Fast forward a few years and I kept on learning Python till
                2015, but I never go to build anything. I set the task to learn
                mobile development and web development in order to promote the
                apps that I wanted to build and so I started learnign HTML, CSS,
                Bootstrap, Node and Obj-C.
              </p>
              <p>
                I graduated in 2016 from Finance & Economics and started working
                in a Logistics Firm and after a year there I realized that I
                became so passionate for software development in general that I
                decided to quit my job and enroll into a bootcamp in order to do
                software development 24/7 for living.
              </p>
              <p>
                Finish the bootcamp in October 2017, I started to apply to jobs
                and I succesfully got a Job in January 2018. Due to my
                international status here in the U.S. my OPT finished in
                February and so I had to stop working. As a Mexican in the U.S.
                if I want to work as a Software Developer/Engineer I have to had
                studied in something related to that which I hadn't and
                therefore I decided to take the matter into my own hands.
              </p>
              <p>
                I am currently enroled in the UM Computer Science B.S. program,
                and very happy with where I am. I am currently doing custom web
                applications and doing Android mobile development. My hobbies
                are playing soccer and playing music.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
