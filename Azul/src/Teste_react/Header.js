import React, { Component } from 'react'

class Header extends Component {
    render() {
      return (
        <nav>
        <div class="nav-wrapper">
            <a href="#" class="brand-logo center">Azul</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li>Luana Duarte</li>
                <li><a href="#">Opções</a></li>
                <li><a href="#">Sair</a></li>
            </ul>
        </div>
        </nav>
        );
    }
}

export default Header