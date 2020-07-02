export function callApi(endpoint) {
    return fetch(endpoint).then(response => response.json());
}