import React, { Component } from 'react';   
import apiModel from '../models/apiModel';    
import Update from '../components/Update';    

class UpdateContainer extends Component {      
    state = {
        customer: []
    }

    updateCustomer = (customer) => {
        console.log(customer)
        apiModel.update(customer)
    };

    render() {
        return (
            <div className='contain'>
                <h2>Update a customer information!</h2>
                <Update
                    updateCustomer={this.updateCustomer}

                />
            </div>
        )
    }
}

export default UpdateContainer;