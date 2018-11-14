import React, { Component } from 'react';

class Counter extends React.Component {
    render() {
        return (
            <div className="Counter">{this.props.count} decades till Valve releases HL3</div>
        )
    }
}

export default Counter;