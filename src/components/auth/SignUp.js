import React from 'react'
import { useHandleChange } from '../../globalHooks/globalHooks'

function SignUp() {
    const [input, handleInputChange] = useHandleChange({
        email:'',
        password: '',
        firstName: '',
        lastName: '',
    });
    const {email, password, firstName, lastName} = input
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(input)
    }

    return (
        <React.Fragment>
            <div className="container">
                <form onSubmit={handleSubmit} className="white z-depth-1">
                    <h5 className="grey-text text-darken-3">Sign Up</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input  type="email" id="email" onChange={handleInputChange} value={email} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input  type="password" id="password" onChange={handleInputChange} value={password} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input  type="text" id="firstName" onChange={handleInputChange} value={firstName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input  type="text" id="lastName" onChange={handleInputChange} value={lastName} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                    </div>
                </form>
            </div>
        </React.Fragment>
    )
}

export default SignUp
