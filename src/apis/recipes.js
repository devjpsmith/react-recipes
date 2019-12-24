import axios from 'axios';

// these are free keys right now, so fine to expose publicly
// TODO: create a backend for this app and use it to make these api calls
const ID = 'a25df038';
const KEY = 'db21059dfae63c999c6ff472cf4502d0';

export const DEFAULT_PARAMS = {
    app_id: ID,
    app_key: KEY
};

export default axios.create({
    baseURL: 'https://api.edamam.com/search'
});