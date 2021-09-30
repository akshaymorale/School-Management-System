import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class StudentListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: undefined,
            students: [],
            message: null
        }
        this.deleteUser = this.deleteStudent.bind(this);
        this.editUser = this.editUser.bind(this);
        this.addUser = this.addUser.bind(this);
        this.reloadUserList = this.reloadUserList.bind(this);
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();
        window.addEventListener('resize', () => {
            this.setState({ windowWidth: document.body.clientWidth })
        });

        ApiService.getAdminBoard().then(
            response => {
                this.setState({
                    content: response.data,
                    currentUser: user,
                    showAdminBoard: user.roles.includes("ROLE_ADMIN"),
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

    deleteStudent(userId) {
        ApiService.deleteStudent(userId)
            .then(res => {
                alert("User Deleted Successfully")
                this.setState({ message: 'User deleted successfully.' });
                this.setState({ students: this.state.students.filter(user => user.id !== userId) });
            })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-user');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-user');
    }
    // addUser2() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user2');
    // }
    // addUser3() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user3');
    // }
    // addUser4() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user4');
    // }
    // addUser5() {
    //     window.localStorage.removeItem("userId");
    //     this.props.history.push('/add-user5');
    // }

    logOut() {
        AuthService.logout();
    }


    render() {
        const { currentUser } = this.state;
        return (
            <div className="list">
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
                                            <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.deleteUser(user.id)}> Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success" onClick={() => this.editUser(user.id)} style={{ marginLeft: '20px', width: '100px' }}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="text-center">
                <button className="btn btn-primary" style={{ width: '500px', marginLeft:'auto', marginRight:'auto' }} onClick={() => this.addUser()}>Add Student</button>
                </div>
            </div>
        )
    }
}

export default StudentListComponent;