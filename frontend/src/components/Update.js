import React, { Component } from 'react';

class Update extends Component {
    state = {
        rowid: null,
        first_name: '',
        last_name: '',
        home_city: '',
    }
    onChange = (event) => {
        this.setState({
            //name is input for first_name, last_name, home_city
            [event.target.name]: event.target.value
        });
    };
    onSubmit = (event) => {
        event.preventDefault();
        let customer = this.state;
        this.props.updateCustomer(customer);
    };
    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <input
                    type='text'
                    placeholder="id number"
                    name='rowid'
                    onChange={this.onChange}
                    value={this.state.rowid}
                    required
                />
                <input
                    type='text'
                    placeholder="First name..."
                    name='first_name'
                    onChange={this.onChange}
                    value={this.state.first_name}
                    required
                />
                <input
                    type='text'
                    placeholder="Last name..."
                    name='last_name'
                    onChange={this.onChange}
                    value={this.state.last_name}
                    required
                />
                <input
                    type='text'
                    placeholder="Home city..."
                    name='home_city'
                    onChange={this.onChange}
                    value={this.state.home_city}
                    required
                />
                <button type='submit'>Update</button>
            </form>
        )
    }
}

export default Update;