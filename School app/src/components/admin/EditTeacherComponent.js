import React, { Component } from 'react'
import ApiService from "../../service/ApiService";

class EditTeacherComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            userName: '',
            password: '',
            contactNo: '',
            qualification: '',
            roles: ['ROLE_TEACHER'],

        }
        this.saveTeacher = this.saveTeacher.bind(this);
        this.loadTeacher = this.loadTeacher.bind(this);
    }

    componentDidMount() {
        this.loadTeacher();
    }

    loadTeacher() {
        ApiService.fetchTeacherById(window.localStorage.getItem("userId"))
            .then((res) => {
                let teacher = res.data;
                console.log(teacher);
                this.setState({
                    id: teacher.id,
                    roles: teacher.roles.userRole,
                    userName: teacher.userName,
                    password: teacher.password,
                    name: teacher.name,
                    email: teacher.email,
                    contactNo: teacher.contactNo,
                    qualification: teacher.qualification,
                })
            });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    saveTeacher = (e) => {
        e.preventDefault();
        let teacher = {
            id: this.state.id, userName: this.state.userName, password: this.state.password,
            name: this.state.name, roles: this.state.roles,
            email: this.state.email, contactNo: this.state.contactNo,
            qualification: this.state.qualification
        };
        ApiService.editTeacher(teacher)
            .then(res => {
                this.setState({ message: 'User details updated successfully. ' });
                alert("Teacher details updated successfully");
                this.props.history.push("/list-t");
            });

    }

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h2 className="text-center display-3">Edit Teacher Details</h2>
                </div>

                <form className="col-sm-3 " style={{ width: '500px', marginLeft: 'auto', marginRight: 'auto', marginTop: '50px' }}>

                    <div className="form-group">
                        <label for="roles">Role</label>
                        <input type="text" placeholder="ROLE_STUDENT" id="roles" name="role" className="form-control" disabled value={this.state.roles} onChange={this.onChange} />
                    </div>

                    <div className="form-group ">
                        <label>User Name:</label>
                        <input type="text" placeholder="userName" name="userName" className="form-control" readonly="true" defaultValue={this.state.userName} />
                    </div>

                    <div className="form-group">
                        <label>Name:</label>
                        <input placeholder="Name" name="name" className="form-control" value={this.state.name} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Email:</label>
                        <input type="email" placeholder="email" name="email" className="form-control" value={this.state.email} onChange={this.onChange} />
                    </div>

                    <div className="form-group">
                        <label>Contact No:</label>
                        <input type="text" placeholder="contactNo" name="contactNo" className="form-control" value={this.state.contactNo} onChange={this.onChange} />
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

                    <button className="btn btn-success" onClick={this.saveTeacher}>Update</button>
                </form>
            </div>
        )
    }

}

export default EditTeacherComponent;