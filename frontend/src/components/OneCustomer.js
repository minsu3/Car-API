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
        let response = this.props.getOneCustomer(customer);

        console.log('response: ', response);
        let element = document.getElementById('response');
        let para = document.createElement("P");
        para.innerHTML = response[0].first_name;
        element.appendChild(para);
    };

    render() {
        return(
            <div id='customers'>
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
                <div id="response"></div>
            </div>

            
        )
    }
}

export default OneCustomer;