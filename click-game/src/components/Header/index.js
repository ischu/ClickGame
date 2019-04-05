import React, {Component} from 'react';
import './style.css'

class Header extends Component {
    render()
    {
        return (
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Memory Game</h1>
                    <p class="lead">Click Each Image Only Once to Win!</p>
                </div>
            </div>
        )
    }
}

export default Header