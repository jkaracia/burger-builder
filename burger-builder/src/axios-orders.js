import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f95a9.firebaseio.com/'
});

export default instance;