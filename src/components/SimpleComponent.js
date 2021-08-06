// Code SimpleComponent Here
import React, { Component } from "react";

class SimpleComponent extends Component {
    constructor() {
        super();

        this.state = {
            mood: "happy"
        }
    }

    handleClick = event => {
        let state = this.state.mood === "happy" ? "sad" : "happy";
        this.setState({
            mood: state
        })
    }

    render() {
        return (
            <div onClick={event => this.handleClick(event)}>{this.state.mood}</div>
        )
    }
}

export default SimpleComponent