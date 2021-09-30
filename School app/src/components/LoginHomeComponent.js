import React, { Component } from "react";
import AuthService from "../service/auth.service";
import ApiService from "../service/ApiService";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class LoginHomeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showAdminBoard: false,
            showStudentBoard: false,
            showTeacherBoard: false,
            showParentBoard: false,
            currentUser: undefined,
            content: ""
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

        ApiService.getPublicContent().then(
            response => {
                this.setState({
                    content: response.data
                });
            },
            error => {
                this.setState({
                    content:
                        (error.response && error.response.data) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }

    logOut() {
        AuthService.logout();
    }


    render() {
        const { currentUser, showTeacherBoard, showStudentBoard, showAdminBoard, showParentBoard } = this.state;
        return (
            <div>
                <div >
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
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

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        )}
                    </nav>
                    <div className="container">
                        <header className="jumbotron text-center">
                            <div className="display-1 text-uppercase">Welcome {AuthService.getCurrentUser().userName}
                            </div>
                        </header>

                       
                    </div>
                </div>
            </div>

        );
    }
}
