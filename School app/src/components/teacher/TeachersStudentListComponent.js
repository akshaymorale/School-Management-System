import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class TeachersStudentListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: undefined,
            students: [],
            message: null
        }
        this.updateAttendance = this.updateAttendance.bind(this);
        this.addFeedback = this.addFeedback.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
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
        ApiService.getStudentList()
            .then((resp) => {
                this.setState({ students: resp.data })
                console.log(this.state.students);
            });
        this.reloadUserList();

    }

    reloadUserList() {

        // UserService.getUsers().then(resp => {
        //     this.setState({ users: resp.data });
        //     console.log(this.state.users);
        // })
    }

    updateAttendance(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/update-attendance');
    }

    addFeedback(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/feedback');
    }

    logOut() {
        AuthService.logout();
    }


    render() {
        const { currentUser, showTeacherBoard } = this.state;
        return (
            <div className="stlist">
                <div className="jumbotron">
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

                                <li className="nav-item">
                                    <Link to={"/register"} className="nav-link">
                                        Register
                                    </Link>
                                </li>
                            </div>
                        )}
                    </nav>
                </div>
                <h2 className="text-center display-3">Student Details</h2>
                <table className="table table-bordered text-center" style={{ marginTop: '50px' }}>
                    <thead className="thead-dark">
                        <tr>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Contact Number</th>
                            <th>Attendance</th>
                            <th>Standard</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(
                                user =>
                                    <tr key={user.id} >
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.address}</td>
                                        <td>{user.contactNo}</td>
                                        <td>{user.attendance}</td>
                                        <td>{user.standard}</td>
                                        <td >
                                            <button className="btn btn-primary" style={{ width: '100px' }} onClick={() => this.addFeedback(user.id)}> Feedback</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.updateAttendance(user.id)} style={{ marginLeft: '20px', width: '170px' }}> Update Attendance</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default TeachersStudentListComponent;