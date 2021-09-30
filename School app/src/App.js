import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePageComponent from './components/Home';
import './App.css';
import '../src/components/Home.css';
import Login from './components/user/LoginUserComponent';
import AboutComponent from './components/AboutComponent';
import AcademicsComponent from './components/AcademicsComponent';
import ContactComponent from './components/ContactComponent';
import InfraStructureComponent from './components/InfrastructureComponent';
import RegisterAdminComponent from './components/admin/RegisterAdminComponent';
import AdminComponent from './components/admin/AdminComponent';
import ProfileComponent from './components/ProfileComponent';
import UserComponent from './components/user/UserComponent';
import LoginHomeComponent from './components/LoginHomeComponent';
import StudentListComponent from './components/admin/StudentListComponent';
import EditStudentComponent from './components/admin/EditStudentComponent';
import RegisterStudentComponent from './components/admin/RegisterStudentComponent'
import TeacherListComponent from './components/admin/TeacherListComponent';
import RegisterTeacherComponent from './components/admin/RegisterTeacherComponent';
import EditTeacherComponent from './components/admin/EditTeacherComponent';
import TeacherComponent from './components/teacher/TeacherComponent';
import TeachersStudentListComponent from './components/teacher/TeachersStudentListComponent';
import UpdateAttendanceComponent from './components/teacher/UpdateAttendanceComponent';
import AddFeedbackComponent from './components/teacher/AddFeedbackComponent';
import StudentComponent from './components/student/StudentComponent';
import FeedbackComponent from './components/student/FeedbackComponent';

class App extends Component {

  render() {
    return (
      <div >
        <Router>
          <Switch>
            <Route path="/" exact component={HomePageComponent} />
            <Route path="/home" exact component={LoginHomeComponent} />
            <Route path="/api/signin" component={Login} />
            <Route path="/profile" component={ProfileComponent} />
            <Route path="/user" component={UserComponent} />
            <Route path="/list" component={StudentListComponent} />
            <Route path="/list-t" component={TeacherListComponent} />
            <Route path="/edit-user" component={EditStudentComponent} />
            <Route path="/edit-teacher" component={EditTeacherComponent} />
            <Route path="/add-user" component={RegisterStudentComponent} />
            <Route path="/add-teacher" component={RegisterTeacherComponent} />
            <Route path="/admin/register" component={RegisterAdminComponent} />
            <Route path="/admin" component={AdminComponent} />
            <Route path="/teacher" component={TeacherComponent} />
            <Route path="/student" component={StudentComponent} />
            <Route path="/stlist" component={TeachersStudentListComponent} />
            <Route path="/update-attendance" component={UpdateAttendanceComponent} />
            <Route path="/feedback" component={AddFeedbackComponent} />
            <Route path="/feedbackDetails" component={FeedbackComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/academics" component={AcademicsComponent} />
            <Route path="/contact" component={ContactComponent} />
            <Route path="/infrastructure" component={InfraStructureComponent} />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
