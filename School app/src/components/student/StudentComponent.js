import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import { Link } from "react-router-dom";
import AuthService from "../../service/auth.service";

class StudentComponent extends Component {
    constructor(props) {

        super(props)
        this.state = {
            showStudentBoard: false,
            currentUser: undefined,
            content: "",
        };
        this.getFeedbacks = this.getFeedbacks.bind(this);
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: document.body.clientWidth })
        });

        ApiService.getStudentBoard().then(
            response => {
                this.setState({
                    content: response.data,
                    currentUser: user,
                    showStudentBoard: user.roles.includes("ROLE_STUDENT"),
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
    getFeedbacks() {
        this.props.history.push('/feedbackDetails')
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showStudentBoard } = this.state;
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark">
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>

                        {showStudentBoard && (
                            <li className="nav-item">
                                <Link to={"/student"} className="nav-link">
                                    Student Board
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
                    <div>
                        <div className="jumbotron text-center">
                            <h1 className="display-3">Mystic Falls High School</h1>
                        </div>

                    </div>

                    <div style={{ padding: '5rem', backgroundColor: 'lightgray' }}>
                        <table>
                            <td>
                                <div style={{ marginRight: '40px' }}>
                                    <button className="btn btn-dark" style={{ width: '500px', marginLeft: 'auto' }} onClick={this.getFeedbacks} >Check Feedbacks </button>
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

                    <br />

                    <div style={{ padding: '5rem', backgroundColor: 'lightgray' }}>
                        <table>
                            <td>
                                <div className="jumbotron" style={{ padding: '2rem', backgroundColor: '' }}>
                                    <p style={{ color: '' }}>
                                        <i> "Undoubtedly, a teacher is the most respectful person in the society. Highly qualified and experienced teachers have always been the cause of the growth of society from ancient times. The students trust their teacher and believe in all that he speaks. This is why the teacher should always be true and honest. Being a teacher is the most responsible work in the world.

                                            The ancient teachers and their teaching methods were much different than those of the modern. In those days, education was not for everyone. The students had to stay with their teacher for many years to learn the basic and advanced skills. The teacher used to teach, preach and protect the students.

                                            The concept of the teacher has completely changed in modern times. The modern teacher focuses on teaching with various extra activities. The modern teacher should have all the information regarding his subject and topic.

                                            By this, he can get confidence and respect from his students. He works on the growth of the students from every aspect. Besides teaching the student, the teacher also regularly communicates with their parents. By this, they together discuss building a bright future for the children."</i>
                                    </p>
                                </div>
                            </td>
                            <td>

                            </td>
                        </table>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        )
    }
}
export default StudentComponent;