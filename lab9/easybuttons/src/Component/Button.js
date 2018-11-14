import React, { Component } from 'react';

class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.onClick} className="Button">Another One</button>
          
      );
    }
  }

export default Button; 