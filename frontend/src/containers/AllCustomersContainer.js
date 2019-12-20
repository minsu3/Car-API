import React, { Component } from 'react';
import apiModel from '../models/apiModel';
import AllCustomers from '../components/AllCustomers';

class AllCustomersContainer extends Component {
    state = {
        customers: []
    }

    componentDidMount() {
        this.fetchData();
    };

    fetchData = () => {
        apiModel.all()
            .then((data) => {
                this.setState({ customers: data });
            });
    };

    deleteCustomer = (customer) => {
        apiModel.delete(customer)
            .then(() => this.fetchData())
        console.log(customer.rowid)
    }   
    render() {
        let indexList 
        if(this.state.customers) {
            // index is position of customer in customers
            indexList = this.state.customers.map((customer, index)=>{
                return (
                    <AllCustomers
                        deleteCustomer={this.deleteCustomer}
                        customer={customer}
                        key={index}
                        fetchData={this.fetchData}
                    />
                )
            })
        }
        return(
            <div className='contain'>
                <h2>List all customers!</h2>
                <div id='customer'>
                    <p className='names'>ID</p>
                    <p className='names'>First Name</p>
                    <p className='names'>Last Name</p>
                    <p className='home'>Home City</p>
                </div>
                {indexList}
            </div>
        )
    }
}

export default AllCustomersContainer;