const BASE_URL = '/api/exercises';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
}

export function create(exercise) {
    return fetch(BASE_URL, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(exercise)
    }).then(res => res.json());
}

// export function update(exercise) {
//     return fetch(`${BASE_URL}/${exercise._id}`, {
//         method: "PUT",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(troll)
//     }).then(res => res.json());
// }

// export function deleteOne(exerciseID) {
//     return fetch(`${BASE_URL}/${exerciseID}`, {
//         method: "DELETE",
//         headers: {
//             "content-type": "application/json",
//         }
//     });
// }