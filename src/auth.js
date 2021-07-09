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

    cities() {
        let cities_key = {
            '1': "Алма-Ата",
            '2': "Нур-Султан",
            '3': "Шымкент",
            '4': "Актобе",
            '5': "Караганда",
            '6': "Тараз",
            '7': "Павлодар",
            '8': "Усть-Каменогорск",
            '9': "Семей",
            '10': "Атырау",
            '11': "Костанай",
            '12': "Кызылорда",
            '13': "Уральск",
            '14': "Петропавловск",
            '16': "Темиртау",
            '15': "Актау",
            '17': "Туркестан",
            '18': "Кокшетау",
            '19': "Талдыкорган",
            '20': "Экибастуз",
            '21': "Рудный"
        };
        let cities = {
            "Алма-Ата": 1,
            "Нур-Султан": 2,
            "Шымкент": 3,
            "Актобе": 4,
            "Караганда": 5,
            "Тараз": 6,
            "Павлодар": 7,
            "Усть-Каменогорск": 8,
            "Семей": 9,
            "Атырау": 10,
            "Костанай": 11,
            "Кызылорда": 12,
            "Уральск": 13,
            "Петропавловск": 14,
            "Темиртау": 16,
            "Актау": 15,
            "Туркестан": 17,
            "Кокшетау": 18,
            "Талдыкорган": 19,
            "Экибастуз": 20,
            "Рудный": 21
        }
        let cities_name = [
            "Алма-Ата",
            "Нур-Султан",
            "Шымкент",
            "Актобе",
            "Караганда",
            "Тараз",
            "Павлодар",
            "Усть-Каменогорск",
            "Семей",
            "Атырау",
            "Костанай",
            "Кызылорда",
            "Уральск",
            "Петропавловск",
            "Темиртау",
            "Актау",
            "Туркестан",
            "Кокшетау",
            "Талдыкорган",
            "Экибастуз",
            "Рудный",
        ];
        return {'cities': cities, 'cities_name': cities_name, 'cities_key': cities_key};
    }
}

export default Auth;
