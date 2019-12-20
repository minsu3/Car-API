//Model 
const endPoint = 'http://localhost:9000/api/customers';

class apiModel {
    static all = () => {
        return fetch(endPoint) // Method isn't required--Get all is default
            .then(response => response.json())
            .catch(err => console.log('Could not get all customers\n', err));
    }
    
    static getOne = (rowid) => {
        return fetch(`${endPoint}/${rowid}`)
            .then(response => {
                response.json()
            })
            .then(x => {
                return x;
                console.log('X: ', x[0]);
            })
            .catch(err => console.log('Could not get customer \n', err));
    };

    static create = (customer) => {
        return fetch(endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            // .then(response => response.json())
            .catch(err => console.log('Could not create customer\n', err))
    }

    static update = (customer) => {
        let rowid = customer.rowid;
        // not expecting rowid in the body
        delete customer.rowid;
        console.log(customer)
        return fetch(`${endPoint}/${rowid}`, {
            method: 'PUT',
            headers: {  
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        })
            .then(response => response.json())
            .catch(err => console.log('Could not update customer \n', err));
    };
    static delete = (customer) => {
        let rowid = customer.rowid;
        // not expecting rowid in the body
        delete customer.rowid;
        return fetch(`${endPoint}/${rowid}`, {
            method: "DELETE"
        })
            .catch(err => console.log('Could not delete customer \n', err));
    }
}

export default apiModel;