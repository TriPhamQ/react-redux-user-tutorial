import React, { Component } from 'react';

import App from '../components/app';
import NavBar from '../components/navbar';

export default class About extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <App />
      </div>
    );
  }
}
