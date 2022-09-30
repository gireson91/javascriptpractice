"use strict"

fetch("https://reqres.in/api/users")
    .then((response) => {
        if (response.status !== 200) {
            console.error(`status: ${response.status}`);
            return;
        }
    response.json()
    .then(data => console.info(data));
    })
.catch((err)=> console.error(`${err}`));

fetch("https://reqres.in/api/users/2")
    .then((response) => {
        if (response.status !== 200) {
            console.error(`status: ${response.status}`);
            return;
        }
    response.json()
    .then(data => console.info(data));
    })
.catch((err)=> console.error(`${err}`));

fetch("https://reqres.in/api/users", {
    method: 'post',
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(
        {
            "first_name": "Morpheus",
            "job": "Leader"
        }
    )
})
.then(response => response.json())
.then(data => console.log(`Request succeeded with JSON response ${data.id}`))
.catch(err => console.error(`${err}`));
