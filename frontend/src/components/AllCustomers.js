import React, { Component } from 'react';

class AllCustomers extends Component {
    render() {
        return(
            <div id='customers'>
                <p className='name'> {this.props.customers.first_name}</p>
                <p className='name'> {this.props.customers.last_name}</p>
                <p className='homecity'> {this.props.customers.home_city}</p>
            </div>
        )
    }   
}

export default AllCustomers;