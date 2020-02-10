import React from 'react'
import {
    Link
} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'

function Navbar() {
    return (
        <React.Fragment>
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link  to='/' className="brand-logo"> Cloud 9 </Link>
                    <SignedInLinks/>
                    <SignedOutLinks /> 
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
