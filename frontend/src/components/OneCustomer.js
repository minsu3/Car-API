import React, { Component } from 'react';

class OneCustomer extends Component {
    state = {
        rowid: null
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
        this.props.getOneCustomer(customer);
    };

    render() {
        return(
            <div id='oneCustomer'>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='number'
                        placeholder="id number"
                        name="rowid"
                        onChange={this.onChange}
                        value={this.state.rowid}
                    />
                    <button type='submit'>Retrieve</button>
            </form>
            </div>
        )
    }
}

export default OneCustomer;