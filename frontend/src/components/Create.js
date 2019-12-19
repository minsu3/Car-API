import React, { Component } from 'react';

class Create extends Component {
    state = {
        customer: '',
    }
    onInputChange = (event) => {
        this.setState({
            customer: event.target.value
        });
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        let customer = this.state.customer;
        this.props.createCustomer(customer);
        this.setState({ customer: '' });
    };

    render() {
        return(
            <form onSubmit = {this.props.onFormSubmit}>
                <input type='text' name='firstName' onChange={this.props.onFormSubmit} value={this.props.content} />
                <input type='text' name='lastName' onChange={this.props.onFormSubmit} value={this.props.content} />
                <input type='text' name='homeCity' onChange={this.props.onFormSubmit} value={this.props.content} />
                <button type='submit'>Create</button>
            </form>
        )
    }
}

export default Create;