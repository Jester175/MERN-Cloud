import axios from "axios"

const API_URL = `http://localhost:1775/api`

export const CloudApi = {
    login(email, password) {
        return axios.post(`${API_URL}/auth/login`, { email, password });
    },

    registration(email, password, username) {
        return axios.post(`${API_URL}/auth/registration`, { email, password, username });
    },

    auth(token) {
        return axios.get(`${API_URL}/auth/auth`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    }
}