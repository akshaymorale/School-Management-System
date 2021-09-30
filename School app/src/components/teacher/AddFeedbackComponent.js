import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class AddFeedbackComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {

            studentId: '',
            firstName: '',
            teacherId: '',
            feedback: '',
            subject: '',
            standard: '',

            currentUser: undefined,
            students: [],
            message: null
        }

        this.loadStudent = this.loadStudent.bind(this);
        this.loadTeacher = this.loadTeacher.bind(this);
        this.saveFeedback = this.saveFeedback.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
        this.loadTeacher();
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
        this.reloadUserList();
    }

    loadTeacher() {
        const teacherUser = AuthService.getCurrentUser();
        ApiService.fetchTeacherById(teacherUser.id)
            .then((res) => {
                let teacher = res.data;
                console.log(teacher);
                this.setState({
                    teacherId: teacher.id,
                })

            })
    }

    loadStudent() {
        ApiService.fetchStudentById(window.localStorage.getItem("userId"))
            .then((res) => {
                let student = res.data;
                console.log(student);
                this.setState({
                    studentId: student.id,
                    firstName: student.firstName,
                    standard: student.standard,
                })
            });
    }


    reloadUserList() {

        // UserService.getUsers().then(resp => {
        //     this.setState({ users: resp.data });
        //     console.log(this.state.users);
        // })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    saveFeedback = (e) => {
        e.preventDefault();
        let feedbacks = {
            studentId: this.state.studentId,
            teacherId: this.state.teacherId,
            feedback: this.state.feedback,
            subject: this.state.subject,

        };
        ApiService.addFeedback(feedbacks)
            .then(res => {
                alert(JSON.stringify(feedbacks));
                this.setState({ message: 'Feedback added successfully. ' });
                alert("Feedback added successfully")
                this.props.history.push("/stlist");
            });

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
                        <h2 className="text-center display-3">Add Feedback</h2>
                    </div>

                    <form className="col-sm-3 " style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>

                        <div className="form-group">
                            <label>Student ID:</label>
                            <input placeholder="Student ID" name="studentId" className="form-control" disabled value={this.state.studentId} onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input placeholder="First Name" name="firstName" className="form-control" disabled value={this.state.firstName} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Standard:</label>
                            <input type="text" placeholder="standard" name="standard" className="form-control" disabled value={this.state.standard} onChange={this.onChange} />
                        </div>

                        <div className="form-group">
                            <label>Teacher ID:</label>
                            <input placeholder="Teacher ID" name="teacherId" className="form-control" disabled value={this.state.teacherId} onChange={this.onChange} />
                        </div>

                        <div>

                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject" name="subject" className="form-control " value={this.state.subject} onChange={this.onChange}>
                                    <option selected>Choose...</option>
                                    <option value="Science">Science</option>
                                    <option value="Maths">Maths</option>
                                    <option value="History">History</option>
                                    <option value="English">English</option>
                                    <option value="Geography">Geography</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label for="feedback">Feedback</label>
                            <input type="text" placeholder="Enter Feedback" id="feedback" name="feedback" className="form-control" value={this.state.feedback} onChange={this.onChange} />
                        </div>

                        <button className="btn btn-success" onClick={this.saveFeedback}>Add Feedback</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default AddFeedbackComponent;