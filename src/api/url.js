import axios from 'axios';
// Add pre-configured instance of Axios pointing to the base url for the Short Url app server
export default axios.create({
    baseURL: 'http://localhost:3000/',
    params: {
    }
});