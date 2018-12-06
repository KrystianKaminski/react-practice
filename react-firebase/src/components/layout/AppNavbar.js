import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class AppNavbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-primary mb-4">
                <div className="container">
                    <Link to="/"
                        className="navbar-brand"
                    >
                        ClientPanel
                    </Link>
                    <div>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link"
                                >
                                    Dashboard

                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}


export default AppNavbar