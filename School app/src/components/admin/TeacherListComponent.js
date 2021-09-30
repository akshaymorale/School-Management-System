import React, { Component } from "react";
import ApiService from "../../service/ApiService";
import AuthService from "../../service/auth.service";
import { Link } from "react-router-dom";

class TeacherListComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentUser: undefined,
            teachers: [],
            message: null
        }
        this.deleteUser = this.deleteTeacher.bind(this);
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
        ApiService.getTeacherList()
            .then((resp) => {
                this.setState({ teachers: resp.data })
                console.log(this.state.teachers);
            });
        this.reloadUserList();

    }

    reloadUserList() {

        // UserService.getUsers().then(resp => {
        //     this.setState({ users: resp.data });
        //     console.log(this.state.users);
        // })
    }

    deleteTeacher(userId) {
        ApiService.deleteTeacher(userId)
            .then(res => {
                this.setState({ message: 'User deleted successfully.' });
                alert("Teacher deleted successfully");
                this.setState({ teachers: this.state.teachers.filter(user => user.id !== userId) });
            })

    }

    editUser(id) {
        window.localStorage.setItem("userId", id);
        this.props.history.push('/edit-teacher');
    }

    addUser() {
        window.localStorage.removeItem("userId");
        this.props.history.push('/add-teacher');
    }

    logOut() {
        AuthService.logout();
    }


    render() {
        const { currentUser } = this.state;
        return (
            <div className="list-t">
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
                <h2 className="text-center display-3">Teacher Details</h2>
                <table className="table table-bordered text-center" style={{ marginTop: '50px'}}>
                    <thead className="thead-dark">
                        <tr>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Contact Number</th>
                            <th>Qualification</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.teachers.map(
                                user =>
                                    <tr key={user.id} >
                                        <td>{user.name}</td>
                                        <td>{user.userName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.contactNo}</td>
                                        <td>{user.qualification}</td>
                                        <td >
                                            <button className="btn btn-danger" style={{ width: '100px' }} onClick={() => this.deleteUser(user.id)}> Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success"  onClick={() => this.editUser(user.id)} style={{ marginLeft: '20px', width: '100px' }}> Edit</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="text-center">
                <button className="btn btn-primary" style={{ width: '500px' }} onClick={() => this.addUser()}> Add New Teacher</button>
                </div>
            </div>
        )
    }
}

export default TeacherListComponent;