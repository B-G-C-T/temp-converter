// connecting to the back end..
import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'

    // running the development from port 3500
});