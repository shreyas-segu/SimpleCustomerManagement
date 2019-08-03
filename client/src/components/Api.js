const API_URL = "http://localhost:3001";
//Asynchronous helper functions for the endpoints
export function getRecords(callback) {
  fetch(API_URL + "/customers").then(response => {
    if (response.ok) {
      response.json().then(records => callback(records));
    }
  });
}

export function addRecord(object, callback) {
  fetch(API_URL + "/customers", {
    body: JSON.stringify(object),
    headers: { "Content-type": "application/json" },
    method: "POST"
  }).then(response => {
    if (response.ok) {
      response.json().then(records => callback(records));
    }
  });
}

export function deleteRecord(id, callback) {
  fetch(API_URL + "/customer/" + id, { method: "DELETE" }).then(response => {
    if (response.ok) {
      response.json().then(records => callback(records));
    }
  });
}

export function updateRecord(id, object, callback) {
  fetch(API_URL + "/customer/" + id, {
    body: JSON.stringify(object),
    headers: { "Content-type": "application/json" },
    method: "PUT"
  }).then(response => {
    response.json().then(result => callback(result));
  });
}
