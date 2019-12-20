import React, { Component } from 'react';
import apiModel from '../models/apiModel';
import OneCustomer from '../components/OneCustomer';

class OneCustomerContainer extends Component {
    state = {
        customers: ''
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
        // let indexList
        // if (this.state.customers) {
        //     indexList = this.state.customers.map((customer, index) => {
        //         return <OneCustomer customer={customer} key={index} />
        //     })
        // }
        return (
            <div className='contain'>
                <h2>Get one customer information!</h2>
                <div id='customer'>
                    <OneCustomer 
                        getOneCustomer={this.getOneCustomer}
                    />


                    {/* <p className='names'>ID</p>
                    <p className='names'>First Name</p>
                    <p className='names'>Last Name</p>
                    <p className='home'>Home City</p> */}
                </div>
                <div id='response'></div>
                {/* {indexList} */}
            </div>
            
        )
    }
}

export default OneCustomerContainer;