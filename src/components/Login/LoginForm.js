import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const LoginForm = ({user, newUser, setNewUser, handleSubmit, handleBlur, handleGoogleSignIn, loginError }) => {
    return (
        <div>
            <div className="login-form-container shadow mb-5 bg-body">
                <h5 className="text-center mb-4">{newUser ? 'CREATE AN ACCOUNT' : 'SIGN IN'}</h5>
                <form onSubmit={handleSubmit}>
                    {
                        newUser &&
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="Enter your name" required />
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onBlur={handleBlur} placeholder="Enter email here" required />
                        {loginError.email && <p className="text-warning">Please enter {newUser ? 'a valid' : 'your'} email!!!</p>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="Enter password here" required />
                        {loginError.password && <p className="text-warning">{newUser ? 'Your password must have 1 uppercase, lowercase, number a special character and at least 8!!!' : 'Please enter your password'}</p>}
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-info">{newUser ? 'CREATE AN ACCOUNT' : 'SIGN IN'}</button>
                    </div>
                </form>
                <div className="mt-2">
                <p className="text-danger">{user.error}</p>
                    {
                        user.success && <p className="text-success">{newUser ? "Your account has been created successfully" : "You are logged In successfully"}</p>
                    }
                </div>
                {
                    newUser ? <p className="text-end mt-4">Already have an account? <span className="text-warning login-and-signup" onClick={() => setNewUser(!newUser)}>Sign In</span></p> :
                        <p className="text-end mt-4">Don't have an account? <span className="text-warning login-and-signup" onClick={() => setNewUser(!newUser)}>Create an account</span></p>
                }

                <p className="text-center">Or Continue with</p>
                <div className="d-grid gap-2">
                    <button onClick={handleGoogleSignIn} className="btn btn-success"><FontAwesomeIcon icon={faGoogle} /> GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;