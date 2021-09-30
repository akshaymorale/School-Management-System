import React, { Component } from 'react';
import './Home.css';
import Logo from "./images/slogo.png";
import { RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';
import '../contact.css';
import { BiLink } from "react-icons/bi";



class ContactComponent extends Component {

    render() {
        return (
            <>
             <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className="topbar">
                    <a href="https://www.facebook.com/"><i><RiFacebookBoxFill /></i></a>
                    <a href="https://www.instagram.com/"><i><RiInstagramLine /></i></a>
                    <a href="https://www.linkedin.com/"><i><RiLinkedinBoxFill /></i></a>
                    <a href="https://www.youtube.com/"><i><RiYoutubeFill /></i></a>
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
                            <a className="active" href="/contact">Contact Us</a>
                            <a href="/about">About Us</a>
                            <a href="/infrastructure">Infrastructure</a>
                            <a href="/academics">Academics</a>
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="jumbotron"><h1>Contact Us</h1></div>
                    </div>
                    <div className="callback">
                        <h2>Leave Us A Message</h2>
                        <p>and we will get back to you</p>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter FullName" id="fullname" name="fullname" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Enter Email ID" id="email" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Enter Mobile Number" id="mobile" name="mobile" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="Message" id="message" name="message" className="form-control" />
                                    </div>
                                    <button className="btn btn-success" >Submit Now</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <h3 className="footer-h1">Address</h3>
                        <p className="footer-p1">Mystic Falls High School, Study Town, Mystic Falls - 431603 Arizona, United States.</p>
                        <div className="footer-1">
                            <strong>+91 9011027212</strong>
                            <br />
                            <a href="#"><strong>www.mfhs.ac.in</strong></a>
                        </div>
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

export default ContactComponent;