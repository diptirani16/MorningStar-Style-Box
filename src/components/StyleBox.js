import React, { Component } from 'react';

class StyleBox extends Component {
    render() {
        return (
            <div className="box" style={(this.props.highlight) ? { backgroundColor: 'black' } : {} }></div>
        )
    }
}

export default StyleBox;