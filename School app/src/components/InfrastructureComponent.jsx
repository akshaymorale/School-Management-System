import React, { Component } from 'react';
import './Home.css';
import Logo from "./images/slogo.png";
import { RiFacebookBoxFill, RiInstagramLine, RiLinkedinBoxFill, RiYoutubeFill } from 'react-icons/ri';
import '../infrastructure.css';
import image2 from './images/classroom_teaching.jpg';
import image1 from './images/library.jpg';

class InfraStructureComponent extends Component {

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
                            <a className="active" href="/infrastructure">Infrastructure</a>
                            <a href="/academics">Academics</a>
                            <a href="/">Home</a>
                        </div>
                    </div>
                    <div className="heading">
                        <div className="jumbotron"><h1>Infrastructure</h1></div>
                    </div>
                    <div className="classroom">
                        <h2>Classrooms</h2>
                        <p>At MFHS, students learn in ergonomically designed classrooms equipped with SMART Boards, and all students from Grades 1 to 5 are provided with laptops. The Higher Secondary School block has 32 Smart Classrooms where 11 Smart LED panels and Smart Document Cameras are also installed. Wi-Fi access points are available to provide wireless coverage to all the classrooms.</p>
                        <img src={image2} alt="loading failed" />
                    </div>
                    <div className="library">
                        <h2>Library</h2>
                        <p>There are three libraries located in different sections of the school. The collection includes books, newspapers, magazines, Kindles, desktop computers, reference materials, CDs and DVDs.

                            GSIS’ well-stocked library houses over 50,000 volumes of books, comprising references, prescribed texts and popular fiction. The school subscribes to over 14 newspapers and 125 national and international magazines. The library is equipped with a computerized database, enabling students to have quick and easy access to necessary books. The school also has memberships of two international libraries to meet the additional needs of students.

                            In order to promote reading, the school organizes various festivals, displays and activities from time to time. These include reading hour sessions, interaction with authors, author birthday celebrations, literary events, quizzes, summer and winter reading challenges. Well qualified teacher librarians assist students with skill developments.

                            In order to attract young readers, the library space has been upgraded to create a better learning ambience and provide adequate space with bean bags and couches to collaborate, research, learn, share, read and relax.</p>
                        <img src={image1} alt="loading failed" />
                    </div>
                </div>
                <div className="footer-bar">
                    <a href="https://www.facebook.com/"><i><RiFacebookBoxFill /></i></a>
                    <a href="https://www.instagram.com/"><i><RiInstagramLine /></i></a>
                    <a href="https://www.linkedin.com/"><i><RiLinkedinBoxFill /></i></a>
                    <a href="https://www.youtube.com/"><i><RiYoutubeFill /></i></a>
                </div>

            </>
        );
    }

}

export default InfraStructureComponent;