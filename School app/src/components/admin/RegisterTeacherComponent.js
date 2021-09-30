import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class RegisterTeacherComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            roles: ['ROLE_TEACHER'],
            userName: '',
            password: '',
            contactNo: '',
            qualification: '',

        }
        this.saveTeacher = this.saveTeacher.bind(this);
    }

    saveTeacher = (e) => {
        e.preventDefault();
        let teacher = {
            userName: this.state.userName, password: this.state.password,
            name: this.state.name, roles: this.state.roles,
            email: this.state.email, contactNo: this.state.contactNo,
            qualification: this.state.qualification
        };
        ApiService.addTeacher(teacher)
            .then(resp => {
                this.setState({ message: 'Teacher Added successfully. ' });
                alert(JSON.stringify(teacher.name) + ' Added successfully. ')
                this.props.history.push("/list-t");
            }).catch(err => {
                alert(err);
                this.props.history.push("/add-teacher");
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
                                <h3>Teacher Registration</h3>
                                <div className="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" placeholder="Enter Name" id="name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
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
                                    <label for="roles">Role</label>
                                    <input type="text" placeholder="ROLE_STUDENT" id="roles" name="role" className="form-control" disabled value={this.state.roles} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" placeholder="Enter Email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                                </div>

                                <div className="form-group">
                                    <label for="contactNo">Contact No</label>
                                    <input type="text" placeholder="Enter Contact No" id="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} />
                                </div>

                                <div>

                                    <div class="form-group">
                                        <label for="qualification">Qualification</label>
                                        <select id="qualification" name="qualification" className="form-control " value={this.state.qualification} onChange={this.onChange}>
                                            <option selected>Choose...</option>
                                            <option value="B.Sc">B.Sc</option>
                                            <option value="M.Sc">M.Sc</option>
                                            <option value="BBA">BBA</option>
                                            <option value="MBA">MBA</option>
                                            <option value="B.Tech">B.Tech</option>
                                            <option value="M.Tech">M.Tech</option>
                                            <option value="BCA">BCA</option>
                                            <option value="MCA">MCA</option>
                                            <option value="BCS">BCS</option>
                                            <option value="PHD">PHD</option>
                                        </select>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={this.saveTeacher}>Register</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4"> </div>
                </body>
            </div>
        )
    }
}

export default RegisterTeacherComponent;