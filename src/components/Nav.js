import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = { searchClass: false };
        this.toggleSearch = this.toggleSearch.bind(this);
    }

    toggleSearch() {
        this.setState({ searchClass: !this.state.searchClass });
    }

    render() {
        let barClass = ["navbar"];
        if (this.state.searchClass) {
            barClass.push('search-open');
        }
        return (
            <nav className={barClass.join(' ')}>
                <div className="overlay btn-close" />
                <div className="container d-flex">
                    <a href="localhost:3000/" className="title">
                        <svg viewBox="0 0 7.66 7.12">
                            <path d="M4.78,7.12,3.86,4.78l-1,2.34L0,0H1.1L2.93,4.75,3.4,3.63,2,0H3L4.78,4.62,6.59,0H7.66Z" />
                        </svg>
                    </a>
                    <ul>
                        <li><a href="/">Home ‎ ‎ ‎ ‎ ‎ </a></li>
                        <li><a href="/chat">Chat - Vinheta</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
