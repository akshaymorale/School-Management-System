import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditStudentComponent extends Component {

    constructor(props) {
        super(props);
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
            standard: ''

        }
        this.saveStudent = this.saveStudent.bind(this);
        this.loadStudent = this.loadStudent.bind(this);
    }

    componentDidMount() {
        this.loadStudent();
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
                alert("Student details updated successfully")
                this.props.history.push("/list");
            });

    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h2 className="text-center display-3">Edit Student Details</h2>
                </div>

                <form className="col-sm-3 " style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>

                    <div className="form-group ">
                        <label>User Name:</label>
                        <input type="text" placeholder="userName" name="userName" className="form-control" readonly="true" defaultValue={this.state.userName} />
                    </div>

                    <div className="form-group">
                        <label>First Name:</label>
                        <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Last Name:</label>
                        <input placeholder="Last name" name="lastName" className="form-control" value={this.state.lastName} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Address:</label>
                        <input type="text" placeholder="address" name="address" className="form-control" value={this.state.address} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Contact No:</label>
                        <input type="text" placeholder="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Standard:</label>
                        <input type="text" placeholder="standard" name="standard" className="form-control" value={this.state.standard} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label for="attendance">Attendance</label>
                        <input type="text" placeholder="Enter Attendance" id="attendance" name="attendance" className="form-control" value={this.state.attendance} onChange={this.onChange} />
                    </div>

                    <button className="btn btn-success" onClick={this.saveStudent}>Update</button>
                </form>
            </div>
        )
    }

}

export default EditStudentComponent;