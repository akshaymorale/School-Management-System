import React, { Component } from 'react';
import './Home.css'
import '../Academics.css'
import Logo from "./images/slogo.png";
import { RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';


class AcademicsComponent extends Component {

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
                            <a href="/about">About Us</a>
                            <a href="/infrastructure">Infrastructure</a>
                            <a className="active" href="/academics">Academics</a>
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="jumbotron"><h1>Academics</h1></div>
                    <div className="heading">
                        <h3>THE SCHOOL AND THE WORLD</h3>
                        <p>A school cannot exist in isolation but needs to be aligned to the broader goals of society and human development. The UNESCO report*, brought out in the late ’90s, has articulated with clarity what the school has been practicing from its inception in the ’60s.</p>
                    </div>
                    <div className="body">
                        <h3 >THE FOUR PILLARS OF LEARNING</h3>
                        <div className="box">
                            <p className=""><strong>Learning to know</strong>to provide the cognitive tools
                                required to better comprehend the world and its
                                complexities, and to provide an appropriate and
                                adequate foundation for future learning.</p>
                        </div>
                        <div className="box">
                            <p className=""><strong>Learning to do</strong>to provide the skills, that would enable individuals to effectively participate in the global economy and society.</p>
                        </div>
                        <div className="box">
                            <p className=""><strong>Learning to be</strong> to provide self-analytical and social skills, to enable individuals to develop to their fullest
                                potential psycho-socially, affectively as well as
                                physically, for an all round ‘complete person’.</p>
                        </div>
                        <div className="box">
                            <p className=""><strong>Learning to live together</strong>to expose individuals, to the values implicit within human rights, democratic
                                principles, intercultural understanding, respect and peace at all levels of society and human relationships to enable living in peace and harmony.</p>
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

export default AcademicsComponent;