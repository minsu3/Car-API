import React, { Component } from 'react';
import apiModel from '../models/apiModel';
import Create from '../components/Create';

class CreateContainer extends Component {
    createCustomer = (customer) => {
        let newCustomer = {
            body: customer,
            completed: false,
        };

        console.log(customer)
        apiModel.create(newCustomer).then((res) => {
            let customers = this.state.customers;
            customers.push(res);
            this.setState({ customers: customers })
        });
    };
    render() {
        return (
            <div className='contain'>
                <h2>Add a customer information!</h2>
                <Create />
            </div>
            
        )
    }
}

export default CreateContainer;