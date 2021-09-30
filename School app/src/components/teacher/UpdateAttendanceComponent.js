import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class UpdateAttendanceComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            userName: '',
            password: '',
            contactNo: '',
            attendance: '',
            standard: '',
            currentUser: undefined,
            students: [],
            message: null
        }
        this.saveStudent = this.saveStudent.bind(this);
        this.loadStudent = this.loadStudent.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
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

    loadStudent() {
        ApiService.fetchStudentById(window.localStorage.getItem("userId"))
            .then((res) => {
                let student = res.data;
                console.log(student);
                this.setState({
                    id: student.id,
                    userName: student.userName,
                    password: student.password,
                    firstName: student.firstName,
                    lastName: student.lastName,
                    email: student.email,
                    address: student.address,
                    contactNo: student.contactNo,
                    attendance: student.attendance,
                    standard: student.standard
                })
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            id: this.state.id, userName: this.state.userName, password: this.state.password,
            firstName: this.state.firstName, lastName: this.state.lastName,
            email: this.state.email, address: this.state.address, contactNo: this.state.contactNo,
            attendance: this.state.attendance, standard: this.state.standard
        };
        ApiService.editStudent(student)
            .then(res => {
                this.setState({ message: 'User details updated successfully. ' });
                alert("Attendance updated successfully")
                this.props.history.push("/stlist");
            });

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
        const { currentUser, showTeacherBoard } = this.state;
        return (
            <div >
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
                <div>
                    <div className="jumbotron">
                        <h2 className="text-center display-3">Update Student Attendance</h2>
                    </div>

                    <form className="col-sm-3 " style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>

                        <div className="form-group">
                            <label>Name:</label>
                            <input placeholder="First Name" name="firstName" className="form-control" disabled value={this.state.firstName} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Standard:</label>
                            <input type="text" placeholder="standard" name="standard" className="form-control" disabled value={this.state.standard} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label for="attendance">Attendance</label>
                            <input type="text" placeholder="Enter Attendance" id="attendance" name="attendance" className="form-control" value={this.state.attendance} onChange={this.onChange} />
                        </div>

                        <button className="btn btn-success" onClick={this.saveStudent}>Update Attendance</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateAttendanceComponent;