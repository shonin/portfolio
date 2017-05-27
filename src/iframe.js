import React, { Component } from 'react';

class Iframe extends Component {
  render() {
      if (this.props.url) {
          return (
              <iframe
                style={{
                    minWidth: "600px"
                }}
              width="100%" height="800px" src={this.props.url}></iframe>
          );
      }
      return null;
  }
}

export default Iframe;
