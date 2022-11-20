const url = "https://jsonplaceholder.typicode.com/users";

const fetchGetUsers = () => {
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
        },
    })
        .then(async res => await res.json())
        .catch(err => { throw err; });
};

export default fetchGetUsers;
