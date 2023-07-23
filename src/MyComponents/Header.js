import React from 'react'
import propTypes from 'prop-types'

export default function Header(props) {
    let navbarStyle = {
        fontFamily: "'Roboto', sans - serif",
    };
    return (
        <div className="p-3 mb-2 bg-dark bg-gradient">
            {/* color of navbar */}
            <nav className="navbar navbar-expand-lg bg-dark bg-gradient ">
                <div className="container-fluid p-4 mb-2 bg-dark-subtle">
                    {/* insert here for inner box */}
                    <a className="navbar-brand" style={navbarStyle} href="#">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        {props.searchBar ? <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> : ""}
                    </div>
                </div>
            </nav>
        </div>
    )
}

Header.defaultProps = {
    title: "Your Title Here",
}
Header.propTypes = {
    title: propTypes.string,
    searchBar: propTypes.bool.isRequired
}