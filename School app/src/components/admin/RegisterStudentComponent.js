import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class RegisterStudentComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            roles: ['ROLE_STUDENT'],
            userName: '',
            password: '',
            contactNo: '',
            attendance: '',
            standard: '',

        }
        this.saveStudent = this.saveStudent.bind(this);
    }

    saveStudent = (e) => {
        e.preventDefault();
        let student = {
            userName: this.state.userName, password: this.state.password,
            firstName: this.state.firstName, lastName: this.state.lastName, roles: this.state.roles,
            email: this.state.email, address: this.state.address, contactNo: this.state.contactNo,
            attendance: this.state.attendance, standard: this.state.standard
        };
        ApiService.addStudent(student)
            .then(resp => {
                this.setState({ message: 'Student Added successfully. ' });
                alert(JSON.stringify(student.firstName) + ' Added successfully. ')
                this.props.history.push("/list");
            }).catch(err => {
                alert(err);
                this.props.history.push("/add-user");
            })
    }

    onChange = (e) =>
        this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                <body>
                    <div className="jumbotron text-center">
                        <h1>Mystic Falls High School</h1>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-4">

                            </div >
                            <div className="col-sm-4">
                                <h3>Student Registration</h3>
                                <div className="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" placeholder="Enter First Name" id="firstName" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" placeholder="Enter Last Name" id="lastName" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="userName">Username</label>
                                    <input type="text" placeholder="Enter Username" id="userName" name="userName" className="form-control" value={this.state.userName} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" placeholder="Enter Password" id="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter Email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="roles">Role</label>
                                    <input type="text" placeholder="ROLE_STUDENT" id="roles" name="role" className="form-control" disabled value={this.state.roles} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="address">Address</label>
                                    <input type="text" placeholder="Enter Address" id="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="contactNo">Contact No</label>
                                    <input type="text" placeholder="Enter Contact No" id="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="attendance">Attendance</label>
                                    <input type="text" placeholder="Enter Attendance" id="attendance" name="attendance" className="form-control" value={this.state.attendance} onChange={this.onChange} />
                                </div>

                                <div>

                                    <div class="form-group">
                                        <label for="standard">Standard</label>
                                        <select id="standard" name="standard" className="form-control " value={this.state.standard} onChange={this.onChange}>
                                            <option selected>Choose...</option>
                                            <option value="I">I</option>
                                            <option value="II">II</option>
                                            <option value="III">III</option>
                                            <option value="IV">IV</option>
                                            <option value="V">V</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={this.saveStudent}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4"> </div>
                </body>
            </div>
        )
    }
}

export default RegisterStudentComponent;