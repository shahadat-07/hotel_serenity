import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
    })

    const handleBlur = e => {

        let isFormValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFormValid = isEmailValid;
        }
        if (e.target.name === 'password') {
            const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
            isFormValid = isPasswordValid;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    console.log(user);
    const handleSubmit = e => {
        e.preventDefault();
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
    }
    // console.log(user);
    return (
        <div className="container mt-5">
            <div className="login-form-container shadow mb-5 bg-body">
                <h5 className="text-center mb-4">{newUser ? 'CREATE AN ACCOUNT' : 'SIGN IN'}</h5>
                <form onSubmit={handleSubmit}>
                    {
                        newUser &&
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter your name" required />
                        </div>
                    }
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input type="email" name="email" className="form-control" onBlur={handleBlur} placeholder="Enter email here" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="Enter password here" required />
                    </div>
                    <div className="d-grid gap-2">
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