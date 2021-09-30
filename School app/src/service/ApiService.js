import axios from 'axios';
import authHeader from './auth-header';

const USER_API_BASE_URL = 'http://localhost:8080';

class ApiService {
    
    fetchHome() {
        return axios.get(USER_API_BASE_URL);
    }

    registerAdmin(admin) {
        return axios.post(""+USER_API_BASE_URL + '/user/signup/admin', admin);
    }

    getPublicContent() {
        return axios.get(USER_API_BASE_URL + '/api/all', {headers: authHeader()})
    }

    getAdminBoard() {
        return axios.get(USER_API_BASE_URL + '/api/admin', {headers: authHeader()});
    }

    getTeacherBoard() {
        return axios.get(USER_API_BASE_URL + '/api/teacher', {headers: authHeader()});
    }

    getStudentBoard() {
        return axios.get(USER_API_BASE_URL + '/api/student', {headers: authHeader()});
    }

    addStudent(student) {
        return axios.post(""+USER_API_BASE_URL + "/user/signup/student", student);
    }

    getStudentList() {
        return axios.get(USER_API_BASE_URL + '/user/student/list');
    }

    fetchStudentById(studentId) {
        return axios.get(USER_API_BASE_URL + "/user/student/" +studentId);
    }

    editStudent(student) {
        return axios.put(USER_API_BASE_URL + '/user/student/' + student.id, student);
    }

    deleteStudent(studentId) {
        return axios.delete(USER_API_BASE_URL + '/user/student/ '+ studentId);
    }

    addTeacher(teacher) {
        return axios.post(""+USER_API_BASE_URL + '/teacher/register', teacher);
    }

    getTeacherList() {
        return axios.get(USER_API_BASE_URL + '/teacher/list');
    }

    fetchTeacherById(id) {
        return axios.get(USER_API_BASE_URL + '/teacher/ ' + id);
    }

    editTeacher(teacher) {
        return axios.put(USER_API_BASE_URL + '/teacher/ ' + teacher.id, teacher);
    }

    deleteTeacher(id) {
        return axios.delete(USER_API_BASE_URL + '/teacher/ ' + id);
    }

    addFeedback(feedbacks) {
        return axios.post(USER_API_BASE_URL + '/teacher/feedback ', feedbacks);
    }

    getFeedbackList(studentId) {
        return axios.get(USER_API_BASE_URL + '/student/feedback/' + studentId);
    }
}

export default new ApiService();