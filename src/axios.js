import axios from 'axios';

//axios instance
const instance = axios.create({
    baseURL: 'https://pneumonia-detection-backendapi.herokuapp.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE'

export default instance;