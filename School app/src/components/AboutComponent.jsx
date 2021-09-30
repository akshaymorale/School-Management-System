import React, { Component } from 'react';
import './Home.css'
import Logo from "./images/slogo.png";
import { RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';
import '../about.css'

class AboutComponent extends Component {

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
                            <a href="/contact">Contact Us</a>
                            <a className="active" href="/about">About Us</a>
                            <a href="/infrastructure">Infrastructure</a>
                            <a href="/academics">Academics</a>
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="jumbotron"><h1>About Us</h1></div>
                    </div>
                    <div className="history">
                        <h2>Our History</h2>
                        <p>The Mystic Falls High School was founded by Stefen Salvatore and Damon Salvatore in the year 2000. Originally known as the Elena Public School, it became an International School of the highest calibre of learning in the year 2005. Stefen Salvatore and his wife Catherine Pierce both started their careers as teachers themselves, which fostered their vision and goal to create the best educational institution in which a child can learn and grow.

                            The motto of the school is “Truth, Trust and Triumph” and students are encouraged to practice secular and ethical values in an atmosphere where every creed and faith co-exists in harmony.  The students are educated in a way that helps them flourish in an environment without inhibition and prejudice in any form.</p>
                    </div>
                    <br />
                    <div className="vision">
                        <h2>Vision of the Founders</h2>
                        <p>The aim of the school is to develop the best talents that are latent in children, and to prepare them for the challenges of a constantly changing world through the encouragement of self-discipline, high intellectual achievements and physical fitness.</p>
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

export default AboutComponent;