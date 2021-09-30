import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class FeedbackComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: undefined,
            feedbacks: [],
            message: null
        }
        this.reloadUserList = this.reloadUserList.bind(this);
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
        ApiService.getFeedbackList(user.id)
            .then((resp) => {
                this.setState({ feedbacks: resp.data })
                console.log(this.state.feedbacks);
            });
        this.reloadUserList();

    }

    reloadUserList() {

        // UserService.getUsers().then(resp => {
        //     this.setState({ users: resp.data });
        //     console.log(this.state.users);
        // })
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser } = this.state;
        return (
            <div className="feedbackDetails">
                <div className="jumbotron">
                    <nav className="navbar navbar-expand navbar-dark bg-dark">
                        <div className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link">
                                    Home
                                </Link>
                            </li>

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
                </div>
                <h2 className="text-center display-3">Feedback Details</h2>
                <table className="table table-bordered text-center" style={{ marginTop: '50px' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Teacher ID</th>
                            <th>Subject</th>
                            <th>FeedBack</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.feedbacks.map(
                                user =>
                                    <tr key={user.id} >
                                        <td>{user.teacherId}</td>
                                        <td>{user.subject}</td>
                                        <td>{user.feedback}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default FeedbackComponent;