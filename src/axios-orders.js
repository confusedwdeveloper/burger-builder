import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-b62df.firebaseio.com/'
})

export default instance