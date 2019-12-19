//Model 
const endPoint = 'http://localhost:9000/api/customers';

class apiModel {
    static all = () => {
        return fetch(endPoint)
            .then(response => response.json())
            .catch(err => console.log('Could not get all customers\n', err));
    }

    static create = (customer) => {
        return fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .then(err => console.log('Could not create customer\n', err))
    }

    // static update = (customer) => {
    //     return fetch(`${endPoint}/${customer._id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //             // 'Content-Type': 'application/x-www-form-urlencoded',
    //         },
    //         body: JSON.stringify(todo)
    //     })
    //         .then(response => response.json())
    //         .catch(err => console.log('Could not update todo \n', err));
    // };

    // static delete = (todo) => {
    //     return fetch(`${endPoint}/${todo._id}`, {
    //         method: "DELETE"
    //     })
    //         .then(response => response.json())
    //         .catch(err => console.log('Could not delete todo \n', err));
    // }

}

export default apiModel;