const BASE_URL = '/api/logs';

// export function getAll() {
//     return fetch(BASE_URL)
//     .then(res => res.json());
// }

// export function create(log) {
//     return fetch(BASE_URL, {
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(log)
//     }).then(res => res.json());
// }

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