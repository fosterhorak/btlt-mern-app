import sendRequest from './send-request';
const BASE_URL = '/api/exercises';


// template...
// export function XXXX() {
//     return sendRequest(URL, 'METHOD', payload);
// }

export function getAll() {
    return sendRequest(BASE_URL);
}

export function create(exercise) {
    return sendRequest(BASE_URL, 'POST', exercise);
}

export function update(exercise) {
    return sendRequest(`${BASE_URL}/${exercise._id}`, 'PUT', exercise);
}

export function deleteOne(exercise) {
    return sendRequest(`${BASE_URL}/${exercise._id}`, 'DELETE', exercise);
}