import React, { Component, PropTypes } from 'react';

class IndexsContainer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2>Index Component</h2>
        </div>
      </div>
    )
  }
}

IndexsContainer.contextTypes = {
  router: React.PropTypes.object,
};

export default IndexsContainer;
