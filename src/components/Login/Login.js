import React, { useState } from 'react';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    return (
        <div className="container mt-5">
            <div className="login-form-container shadow mb-5 bg-body">
                <h5 className="text-center mb-4">{newUser ? 'CREATE AN ACCOUNT' : 'SIGN IN'}</h5>
                <form className="" action="">
                    {
                        newUser && <div className="row">
                            <div className="mb-3 col-6">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name" />
                            </div>
                            <div className="mb-3 col-6">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" />
                            </div>
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Enter email here" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" placeholder="Enter password here" />
                    </div>
                    <div class="d-grid gap-2">
                        <button className="btn btn-info">{newUser ? 'CREATE AN ACCOUNT' : 'SIGN IN'}</button>
                    </div>
                </form>
                {
                    newUser ? <p className="text-end mt-4">Already have an account? <span className="text-warning login-and-signup" onClick={() => setNewUser(!newUser)}>Sign In</span></p> :
                        <p className="text-end mt-4">Don't have an account? <span className="text-warning login-and-signup" onClick={() => setNewUser(!newUser)}>Create an account</span></p>
                }
            </div>
        </div>
    );
};

export default Login;