import axios from "axios";

const API_URL = "http://localhost:8080/user";

class AuthService {
    loginUser(userName, password) {
        return axios.post(API_URL + "/signin", {
            userName,
            password
        })
        .then(response => {
            if(response.data.jwt) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();