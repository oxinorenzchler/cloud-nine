import React from 'react'
import {
    NavLink
} from 'react-router-dom'

function SignedInLinks() {
    return (
        <React.Fragment>
            <ul className="right">
                <li><NavLink to='/'>New Project</NavLink></li>
                <li><NavLink to='/'>Logout</NavLink></li>
                <li><NavLink to='/' className="btn btn-floating pink lighten-1">CN</NavLink></li>
            </ul>
        </React.Fragment>
    )
}

export default SignedInLinks
