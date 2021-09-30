import React, { Component } from "react";
import './Home.css';
import Logo from "./images/slogo.png";
import image1 from "./images/classroom.jpg";
import image2 from "./images/hallway.jpg";
import image3 from "./images/dance.jpg";
import image4 from "./images/playing.jpg";
import image5 from "./images/building.jpg";
import image6 from "./images/acre.jpg";
import image7 from "./images/sports.jpg";
import image8 from "./images/classroom_teaching.jpg";
import image9 from "./images/award.jpg";
import image10 from "./images/hostel.jpg";
import { BiBuildings, BiFootball, BiMap, BiLink } from "react-icons/bi";
import { RiParentFill, RiAwardFill, RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';


class HomePageComponent extends Component {
  constructor(props) {

    super(props)

    this.getLoginForm = this.getLoginForm.bind(this);
  }

  getLoginForm() {
    this.props.history.push('/user')
  }

  render() {
    return (
      <>
        <div className="page">
          <head>
            <meta charset="UTF-8"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          </head>
          <div className="topbar">
            <a href=""><i><RiFacebookBoxFill /></i></a>
            <a href=""><i><RiInstagramLine /></i></a>
            <a href=""><i><RiLinkedinBoxFill /></i></a>
            <a href=""><i><RiYoutubeFill /></i></a>
          </div>

          <div className="home">
            <div className="home-heading">
              <h1 >Mystic Falls High School</h1>
              <div className="home-logo">
                <a className="navbar-brand" href="/"><img src={Logo} alt="Error loading" width="120px" height="120px" /></a>
              </div>
            </div>
            <div className="topnav">
              <div className="topnav-left">
                <a href="/contact">Contact Us</a>
                <a href="/about">About Us</a>
                <a href="/infrastructure">Infrastructure</a>
                <a href="/academics">Academics</a>
                <a className="active" href="/">Home</a>
              </div>
              <button class="btn " onClick={this.getLoginForm}>Login/Register</button>
            </div>

            <div className="slide">
              <div id="carousel" className="carousel slide" data-bs-ride="carousel">
                <ul class="carousel-indicators">
                  <li data-target="#carousel" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel" data-slide-to="1"></li>
                  <li data-target="#carousel" data-slide-to="2"></li>
                  <li data-target="#carousel" data-slide-to="3"></li>
                  <li data-target="#carousel" data-slide-to="4"></li>
                </ul>
                <div className="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="2000">
                    <img src={image5} className="image5" alt="loading failed"></img>
                    <div className="carousel-caption">
                      <h1>Campus</h1>
                    </div>
                  </div>
                  <div className="carousel-item " data-bs-interval="2000">
                    <img src={image1} className="image1" alt="loading failed" ></img>
                    <div className="carousel-caption">
                      <h1>Classroom</h1>

                    </div>
                  </div>
                  <div class="carousel-item" data-bs-interval="2000">
                    <img src={image2} className="image2" alt="loading failed" ></img>
                    <div className="carousel-caption">
                      <h1>Hallway</h1>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={image3} className="image3" alt="loading failed"></img>
                    <div className="carousel-caption">
                      <h1>Co Curricular</h1>

                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={image4} className="image4" alt="loading failed" ></img>
                    <div className="carousel-caption">
                      <h1>Sports</h1>

                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carousel" data-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a class="carousel-control-next" href="#carousel" data-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
            <div className="utilities">
              <div className="box">
                <img src={image6} alt="loading failed" />
                <p className="content"> <strong>100+</strong><br /> Acres of School <br /> Campus</p>
              </div>
              <div className="box">
                <img src={image7} alt="loading failed" />
                <p className="content"><strong>30+</strong><br /> Co-Curricular <br /> Activities</p>
              </div>
              <div className="box">
                <img src={image8} alt="loading failed" />
                <p className="content"><strong>500+</strong><br />Fully Residential <br />Students</p>
              </div>
              <div className="box">
                <img src={image9} alt="loading failed" />
                <p className="content"><strong>20</strong><br /> Years of Academic<br /> Excellence</p>
              </div>
              <div className="box">
                <img src={image10} alt="loading failed" />
                <p className="content"><strong>A+</strong><br /> Hostel <br />Facilities</p>
              </div>
            </div>

            <div className="about">
              <h3>About MFHS</h3>
              <p>Mystic Falls High School is one of India’s best fully residential, international co-educational schools, located in Mystic Falls. Our meticulous attention to academic excellence is matched by an inspiring range of extra-curricular activities that ensures the holistic development of every child under our care.</p>
            </div>

            <div className="facilities">
              <div className="content" >
                <i ><BiBuildings /></i>
                <h3>Academic Facilites</h3>
                <p >We provide state-of-the-art facilities for effective teaching and learning at the school.</p>
              </div>
              <div className="content">
                <i ><BiFootball /></i>
                <h3>Sport & Games</h3>
                <p >We encourage students to pursue an active lifestyle, and provide the latest facilities for all sports and games</p>
              </div>
              <div className="content">
                <i ><RiParentFill /></i>
                <h3 >Boarding & Homely Care</h3>
                <p >It is our earnest endeavour to make our students’ stay in the school ‘a home away from home’.</p>
              </div>
              <div className="content">
                <i ><RiAwardFill /></i>
                <h3 >Awards</h3>
                <p >MFHS has won several awards for providing world-class academic and co-curricular education facilities.</p>
              </div>
            </div>

            <div className="footer">
              <div className="box-container">
                <div className="box">
                  <i className="footer-i1"><BiMap /></i>
                  <h3 className="footer-h1">Address</h3>
                  <p className="footer-p1">Mystic Falls High School, Study Town, Mystic Falls - 431603 Arizona, United States.</p>
                  <strong>+91 9011027212</strong>
                  <br />
                  <a href="/"><strong>www.mfhs.ac.in</strong></a>
                </div>
                <div className="box">
                  <i className="footer-i2"><BiLink /></i>
                  <h3 className="footer-h2">Quick Links</h3>
                  <a className="footer-a1" href="/about">About Us</a>
                  <br />
                  <a className="footer-a2" href="/academics">Academics</a>
                  <br />
                  <a className="footer-a3" href="/infraStructure">InfraStructure</a>
                  <br />
                  <a className="footer-a4" href="/contact">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bar">
            <a href="https://www.facebook.com/"><i><RiFacebookBoxFill /></i></a>
            <a href="https://www.instagram.com/"><i><RiInstagramLine /></i></a>
            <a href="https://www.linkedin.com/"><i><RiLinkedinBoxFill /></i></a>
            <a href="https://www.youtube.com/"><i><RiYoutubeFill /></i></a>
          </div>

        </div>
      </>
    );
  }
}

export default HomePageComponent;