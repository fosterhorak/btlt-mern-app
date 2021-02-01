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

// export function update(log) {
//     return fetch(`${BASE_URL}/${log._id}`, {
//         method: "PUT",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(log)
//     }).then(res => res.json());
// }

// export function deleteOne(logID) {
//     return fetch(`${BASE_URL}/${logID}`, {
//         method: "DELETE",
//         headers: {
//             "content-type": "application/json",
//         }
//     });
// }