import sendRequest from './send-request';
const BASE_URL = '/api/logs';



// template...
// export function XXXX() {
//     return sendRequest(URL, 'METHOD', payload);
// }

export function getAll() {
    return sendRequest(BASE_URL);
}

export function create(log) {
    return sendRequest(BASE_URL, 'POST', log);
}

export function update(log) {
    return sendRequest(`${BASE_URL}/${log._id}`, 'PUT', log);
    
}

export function deleteOne(log) {
    return sendRequest(`${BASE_URL}/${log._id}`, 'DELETE', log);
}