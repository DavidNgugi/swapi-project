import axios from 'axios';

import { SWAPI_BASE_URL } from '../config';

const API = axios.create({
    baseURL: SWAPI_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default API;