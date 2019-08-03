export function getRecords(callback) {
  fetch("http://localhost:3000/customers").then(response => {
    if (response.ok) {
      response.json().then(records => callback(records));
    }
  });
}

export function addRecord(object, callback) {
  fetch("http://localhost:3000/customers", {
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
  fetch("http://localhost:3000/customer/" + id, { method: "DELETE" }).then(
    response => {
      if (response.ok) {
        response.json().then(records => callback(records));
      }
    }
  );
}

export function updateRecord(id, object, callback) {
  fetch("http://localhost:3000/customer/" + id, {
    body: JSON.stringify(object),
    headers: { "Content-type": "application/json" },
    method: "PUT"
  }).then(response => {
    response.json().then(result => callback(result));
  });
}
