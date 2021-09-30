import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import { Link } from "react-router-dom";
import AuthService from "../../service/auth.service";

class TeacherComponent extends Component {
    constructor(props) {

        super(props)
        this.state = {
            showTeacherBoard: false,
            currentUser: undefined,
            content: "",
        };
        this.getStudents = this.getStudents.bind(this);
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: document.body.clientWidth })
        });

        ApiService.getTeacherBoard().then(
            response => {
                this.setState({
                    content: response.data,
                    currentUser: user,
                    showTeacherBoard: user.roles.includes("ROLE_TEACHER"),
                });
            },
            error => {
                this.setState({
                    content: (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                        error.message ||
                        error.toString()
                });
            }
        );
    }
    getStudents() {
        this.props.history.push('/stlist')
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showTeacherBoard } = this.state;
        return (
            <div>
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
                <div className="container">
                    <div className="jumbotron text-center">
                        <h1 className="display-3">Mystic Falls High School</h1>
                    </div>
                    <div style={{ padding: '5rem', backgroundColor: 'lightgray' }}>
                        <table>
                            <td>
                                <div style={{ marginRight: '40px' }}>
                                    <button className="btn btn-dark" style={{ width: '500px', marginLeft: 'auto' }} onClick={this.getStudents} >Student Section </button>
                                </div>

                            </td>
                            <td>
                                <div className="jumbotron" style={{ padding: '2rem', backgroundColor: '' }}>
                                    <p style={{ color: '' }}>
                                        <i> "A student’s life is a foundation for learning. A student has to face all types of situations and is trained for the future.
                                            They learn to obey, respect and discipline themselves.
                                            They get to mingle with other students and teachers. A child’s character is shaped during this period.
                                            School life is the best and happiest part of every student. They live with no worries and tensions about the future.
                                            They play, make friends, learn skills, and live life to the fullest. It is the school where discipline is formed.
                                            They learn to be punctual, follow rules, and perform duties. Most importantly, they acquire knowledge and develop new skills in them.
                                            The training from the school life is what makes students turn into better personalities.
                                            Student life is the most valuable part in which teachers and parents guide them in the right way
                                            and allow them to know what is good and bad for life."</i>
                                    </p>
                                </div>
                            </td>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default TeacherComponent;