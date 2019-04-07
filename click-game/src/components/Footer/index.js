import React, { Component } from 'react';
import "./style.css"

class Footer extends Component {
    render() {
        return (
            <div className={this.props.gameOver? "bg-success" :(this.props.correct ? "bg-info" : "bg-danger")}>
                <div className="footer text-justify text-center text-dark">
                    {'\u00A9'}2019 Ian Schu
                </div>
            </div>
        )
    }
}

export default Footer