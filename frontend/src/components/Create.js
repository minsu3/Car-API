import React, { Component } from 'react';

class Create extends Component {
    state = {
        first_name: '',
        last_name: '',
        home_city: '',
    }
    onInputChange = (event) => {
        this.setState({
            //name is input for first_name, last_name, home_city
            [event.target.name]: event.target.value
        });
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        let customer = this.state;
        this.props.createCustomer(customer);
    };
    render() {
        return(
            <form onSubmit = {this.onFormSubmit}>
                <input 
                    type='text' 
                    placeholder="First name..."
                    name='first_name' 
                    onChange={this.onInputChange} 
                    value={this.state.first_name} 
                    required
                />
                <input 
                    type='text' 
                    placeholder="Last name..."
                    name='last_name' 
                    onChange={this.onInputChange} 
                    value={this.state.last_name}
                    required 
                />
                <input 
                    type='text' 
                    placeholder="Home city..."
                    name='home_city' 
                    onChange={this.onInputChange} 
                    value={this.state.home_city}
                    required  
                />
                <button type='submit'>Create</button>
            </form>
        )
    }
}

export default Create;