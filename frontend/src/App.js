import React, { Component } from 'react';
import Header from './components/Header';
import routes from './config/routes';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
        { routes }
      </div>
    );
  };
};

export default App;
