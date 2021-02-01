import sendRequest from './send-request';
const BASE_URL = '/api/exercises';


// template...
// sendRequest(URL, 'METHOD', payload);


export function getAll() {
    // return fetch(BASE_URL)
    // .then(res => res.json());

    return sendRequest(BASE_URL);
}



export function create(exercise) {
    // return fetch(BASE_URL, {
    //     method: "POST",
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     body: JSON.stringify(exercise)
    // }).then(res => res.json());

    return sendRequest(BASE_URL, 'POST', exercise);


}

export function update(exercise) {
    // return fetch(`${BASE_URL}/${exercise._id}`, {
    //     method: "PUT",
    //     headers: {
    //         "content-type": "application/json"
    //     },
    //     body: JSON.stringify(troll)
    // }).then(res => res.json());

    return sendRequest(`${BASE_URL}/${exercise._id}`, 'PUT', exercise);
}

export function deleteOne(exercise) {
    // return fetch(`${BASE_URL}/${exerciseID}`, {
    //     method: "DELETE",
    //     headers: {
    //         "content-type": "application/json",
    //     }
    // });
    return sendRequest(`${BASE_URL}/${exercise._id}`, 'DELETE', exercise);
}