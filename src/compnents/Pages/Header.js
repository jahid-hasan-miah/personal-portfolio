import React, { Component } from 'react'
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import header from './pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faHands } from '@fortawesome/free-solid-svg-icons'
import {Form,Button} from 'react-bootstrap'
import Navbar from '../Navbar'

class Header extends Component {
  render() {
    return (
      <div>
        <section id="home">
        <Navbar></Navbar>
          <div className="header-wraper">
            <div className="main-info">
              <h2 >Here I'm Providing the listed service...</h2>
              <hr></hr>
              <Typed className="typed-text"
                strings={["Fully Responsive custom websites, Android Application, Digital Marketing"]}
                typeSpeed={30}
                backSpeed={20}
                loop
              />
            </div>
            <Particles
              params={{
                particles: {
                  number: {
                    value: 40,
                    density: {
                      enable: true,
                      value_area: 500
                    }
                  }
                }
              }} />
          </div>
        </section>

        <section id="about">
          <h2 className="section-title text-center"><b>About Me</b></h2>
          <hr className="hr-style" style={{ color: "black" }}></hr>
          <div className="container">

            <div className="container profile-image">
              <img src={header}></img>
            </div>
            <div className="name container">
              <h2><b>Md Jahid Hasan Miah</b></h2>
              <p >
                I am a Software Engineer with hands on experienced in Web application development with Asp dotnet core mvc,
                Android App Development, firebase, SQL and MySQL database and also experienced with google API.
                All things i do is,
                    And I am good and fast learner and very much interested on learn new and different Technologies.<br></br>
                <b style={{ fontSize: 26 }}>I am expert on:</b><br></br>
                    ✅ Asp.net core mvc <br></br>
                    ✅ HTML, CSS, Bootstrap<br></br>
                    ✅ Android Development with Java <br></br>
                    ✅ Google API Integration<br></br>
                    ✅ Database Management<br></br>
                    ✅ Firebase<br></br>
              </p>
            </div>
          </div>
        </section>

        <section id="project" className="text-center project">
          <h2><b>All of My Project</b></h2>
          <hr className="hr-style" style={{ color: "black" }}></hr>
          <div className="row">
            <div className="col-lg-3">
              <div className="feature-col ">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-3x icon-style rounded-circle" />
                <h5 className="font-weight-bold">Free to use</h5>
                <p className="small">Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-col ">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-3x icon-style rounded-circle" />
                <h5 className="font-weight-bold">Free to use</h5>
                <p className="small">Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-col ">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-3x icon-style rounded-circle" />
                <h5 className="font-weight-bold">Free to use</h5>
                <p className="small">Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="feature-col ">
                <FontAwesomeIcon icon={faHandHoldingUsd} className="fa-3x icon-style rounded-circle" />
                <h5 className="font-weight-bold">Free to use</h5>
                <p className="small">Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-me">
          <h2 className="text-center"><b>Contact Me</b></h2>
          <hr className="hr-style" style={{ color: "black" }}></hr>
          <div className="container">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              
              <Form.Group controlId="formBasicContact">
                <Form.Label>Contact Number</Form.Label>
                <Form.Control type="number" placeholder="Enter your Contact Number" />
                <Form.Text className="text-muted">
                  We'll never share your contact number with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Describe here" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Send Mail
              </Button>
            </Form>
          </div>
          <a href="#home" className="goto-top"><b>Goto Top</b></a>
        </section>
        
      </div>
    );
  }
}
export default Header;