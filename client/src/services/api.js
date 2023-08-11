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
    },

    getFiles(dirId, token) {
        return axios.get(`${API_URL}/file${dirId ? '?parent=' + dirId : ''}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    },

    createDir(dirId, token, name) {
        return axios.post(`${API_URL}/file`, {
            name,
            parent: dirId,
            type: 'dir'
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
    },

    uploadFile(token, file) {
        return axios.post(`${API_URL}/file/upload`, file, {
            headers: { Authorization: `Bearer ${token}` },
            onUploadProgress: progressEvent => {
                const totalLength = progressEvent.lengthComputable ? progressEvent.total : (progressEvent.target && (progressEvent.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length')));
                console.log('total', totalLength);
                if (totalLength) {
                    let progress = Math.round((progressEvent.loaded * 100) / totalLength);
                    console.log(progress);
                }
            }
        });
    },
}