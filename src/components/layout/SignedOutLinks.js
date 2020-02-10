import React from 'react'
import {
    NavLink
} from 'react-router-dom'

function SignedOutLinks() {
    return (
        <React.Fragment>
            <ul className="right">
                <li><NavLink to='/'>Signup</NavLink></li>
                <li><NavLink to='/'>Login</NavLink></li>
            </ul>
        </React.Fragment>
        )
    }
    
    export default SignedOutLinks
    