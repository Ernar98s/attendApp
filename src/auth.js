const axios = require('axios')

class Auth {
    constructor() {
        this.token = window.localStorage.getItem('token');
        let userData = window.localStorage.getItem('user');
        let roleData = window.localStorage.getItem('role');
        this.user = userData ? JSON.parse(userData) : null;
        this.role = roleData ? roleData : null;
        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
        }
    }
    logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("user");
        window.localStorage.removeItem("role");
        window.location.reload();
    }
    edit(user) {
        window.localStorage.setItem('user', JSON.stringify(user));
    }
    login(token) {
        window.localStorage.setItem('token', token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        this.token = token;
    }

    check() {
        return !!this.token;
    }
}

export default Auth;
