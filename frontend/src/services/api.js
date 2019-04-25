import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackbackendvalchan.herokuapp.com/',
});

export default api;