import React, { Component } from 'react';

class AllCustomers extends Component {
    handleClick = () => {
        this.props.deleteCustomer(this.props.customer)
    }
    render() {
        return(
            <div id='customers'>
                <p>{this.props.customer.rowid}</p>
                <p className='name'> {this.props.customer.first_name}</p>
                <p className='name'> {this.props.customer.last_name}</p>
                <p className='homecity'> {this.props.customer.home_city}</p>

                <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }   
}

export default AllCustomers;