import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../service/auth.service";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default class ProfileComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showAdminBoard: false,
      showStudentBoard: false,
      showTeacherBoard: false,
      showParentBoard: false,
      redirect: null,
      userReady: false,
      currentUser: { userName: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }


  logOut() {
    AuthService.logout();
  }

  render() {
    const { showTeacherBoard, showStudentBoard, showAdminBoard, showParentBoard } = this.state;
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
           Home
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Dashboard
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
          {(this.state.userReady) ?
            <div>
              <header className="jumbotron">
                <h3>
                  <strong>{currentUser.userName}</strong> Profile
                </h3>
              </header>
              <p>
                <strong>Token:</strong>{" "}
                {currentUser.jwt.substring(0, 20)} ...{" "}
                {currentUser.jwt.substr(currentUser.jwt.length - 20)}
              </p>
              <p>
                <strong>Id:</strong>{" "}
                {currentUser.id}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {currentUser.email}
              </p>
              <strong>Authorities:</strong>
              <ul>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </ul>
            </div> : null}
        </div>
      </div>
    )
  }
}