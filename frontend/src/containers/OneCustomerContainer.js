import React, { Component } from 'react';
import apiModel from '../models/apiModel';
import OneCustomer from '../components/OneCustomer';

class OneCustomerContainer extends Component {
    state = {
        customers: null
    }
    getOneCustomer = (customer) => {
        apiModel.getOne(customer.rowid)
            .then((response) => {
                console.log('RESPONSE:', response);
                let element = document.getElementById('response');
                let para = document.createElement("P");
                para.innerHTML = response[0].first_name;
                element.appendChild(para);
            })
    }
    render() {
        return (
            <div className='contain'>
                <h2>Get one customer information!</h2>
                <div id='customer'>
                    <OneCustomer 
                        getOneCustomer={this.getOneCustomer}
                    />
                </div>
                <div id='response'></div>
            </div>
            
        )
    }
}

export default OneCustomerContainer;