import React, { Component } from 'react';
import apiModel from '../models/apiModel';
import Create from '../components/Create';

class CreateContainer extends Component {
    state = {
        customer: []
    }
    
    componentDidMount() {
        // run this code once component has mounted.
    };

    createCustomer = (customer) => {
        console.log(customer) 
        apiModel.create(customer) 
    };

    render() {
        return (
            <div className='contain'>
                <h2>Add a customer information!</h2>
                <Create
                    createCustomer={this.createCustomer}
                />
            </div>
        )
    }
}

export default CreateContainer;