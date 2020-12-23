import React, { Component } from 'react';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.emailInputRef = React.createRef();
        this.passwordInputRef = React.createRef();
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Register</span>
                <div className="field">
                    <input type="name" placeholder="Full Name" required />
                </div>
                <div className="field">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="field">
                    <input type="password" placeholder="Password" required />
                </div>
                <div className="field">
                    <button>Sign up</button>
                </div>
            </form>
        );
    }
}

export default Signup;