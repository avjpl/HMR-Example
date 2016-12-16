import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="medium-12 columns">
          <h2>Home</h2>
        </div>
      </div>
    );
  }
}

Home.need = [
  require('../../api/fake')
];

export default Home;
