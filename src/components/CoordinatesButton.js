// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export class CoordinatesButton extends Component {
    //constructor(props) {
       // super(props)
        //this.handleClick = this.handleClick.bind(this);
    //}
    
    handleClick = (e) => {
        this.props.onReceiveCoordinates([e.clientX, e.clientY])
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Button</button>
            </div>
        )
    }
}

export default CoordinatesButton
