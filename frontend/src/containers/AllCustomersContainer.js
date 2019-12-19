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

    render() {
        // this.state.customers 
        // ? console.log(this.state.customers)
        // : 
        let indexList 
        if(this.state.customers) {
            indexList = this.state.customers.map((customer, index)=>{
                return <AllCustomers customers={customer} key={index} />
            })
        }
        return(
            <div className='contain'>
                <h2>List all customer information!</h2>
                <div id='customer'>
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