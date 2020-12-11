// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {
    handleClick = () => {
        return setTimeout(this.props.onDelayedClick)
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>DELAY BUTTON</button>
            </div>
        )
    }
}
export default DelayedButton