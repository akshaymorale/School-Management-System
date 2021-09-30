import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../images/classroom.jpg";
import image2 from "../images/hallway.jpg";
import image3 from "../images/dance.jpg";
import image4 from "../images/playing.jpg";
import image5 from "../images/building.jpg";
import '../Home.css';

import AuthService from "../../service/auth.service";

class UserComponent extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);


        this.state = {
            showAdminBoard: false,
            showStudentBoard: false,
            showTeacherBoard: false,
            showParentBoard: false,
            currentUser: undefined,
        };
    }


    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showAdminBoard: user.roles.includes("ROLE_ADMIN"),
                showStudentBoard: user.roles.includes("ROLE_STUDENT"),
                showTeacherBoard: user.roles.includes("ROLE_TEACHER"),
                showParentBoard: user.roles.includes("ROLE_PARENT"),
            })
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showTeacherBoard, showStudentBoard, showAdminBoard, showParentBoard } = this.state;

        return (
            <div>
                <div className="jumbotron text-center">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <Link to={"/home"} className="navbar-brand">

                        </Link>
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/user"} className="nav-link">
                                    Home
                                </Link>
                            </li>

                            {showTeacherBoard && (
                                <li className="nav-item">
                                    <Link to={"/teacher"} className="nav-link">
                                        Teacher Board
                                    </Link>
                                </li>
                            )}

                            {showAdminBoard && (
                                <li className="nav-item">
                                    <Link to={"/admin"} className="nav-link">
                                        Admin Board
                                    </Link>
                                </li>
                            )}

                            {showStudentBoard && (
                                <li className="nav-item">
                                    <Link to={"/student"} className="nav-link">
                                        Student Board
                                    </Link>
                                </li>
                            )}

                            {showParentBoard && (
                                <li className="nav-item">
                                    <Link to={"/parent"} className="nav-link">
                                        Parent Board
                                    </Link>
                                </li>
                            )}
                        </div>
                        <div className="navbar-brand mr-0">
                            <h1>Mystic Falls High School</h1>
                        </div>
                        {currentUser ? (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link">
                                        {currentUser.userName}
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" onClick={this.logOut}>
                                        LogOut
                                    </a>
                                </li>
                            </div>
                        ) : (
                            <div className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={"/api/signin"} className="nav-link">
                                        Login
                                    </Link>
                                </li>

                            </div>
                        )}
                    </nav>
                </div>
                <div>
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
                </div>
            </div>
        )
    }
}

export default UserComponent;