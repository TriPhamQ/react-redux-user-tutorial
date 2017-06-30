import React, { Component } from 'react';

import NavBar from '../components/navbar';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>
          404 <small>Not Found :(</small>
        </h1>
      </div>
    );
  }
}