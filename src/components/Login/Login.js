import React, { useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import LoginForm from './LoginForm';
import { userName } from './ManageLogin';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [loginError, setLoginError] = useState({email: false, password: false});
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    })

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const userData = result.user;

            }).catch(error => {
                const errorMessage = error.message;

            });
    }

    const handleBlur = e => {

        let isFormValid = true;
        if (e.target.name === 'email') {
            const isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
            isFormValid = isEmailValid;
        }else{
            const loginErrorInfo = {...loginError};
            loginErrorInfo.password = true;
            setLoginError(loginErrorInfo);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
            isFormValid = isPasswordValid;
        }else{
            const loginErrorInfo = {...loginError};
            loginErrorInfo.email = true;
            setLoginError(loginErrorInfo);
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
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(data => {
                    data.user.sendEmailVerification();
                    alert('Please verify your email address');
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    updateUserName(user.name);
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(data => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }
        e.target.reset();
        setLoginError('');
    }

    const updateUserName = name => {
        userName(name);
    }

    // const getCurrentUser = () => {
    //     firebase.auth().onAuthStateChanged(function (user) {
    //         if (user) {
    //             setUser(user);
    //         } else {
    //             setUser('');
    //         }
    //     });
    // }

    return (
        <div className="container mt-5">
            <LoginForm user={user} handleGoogleSignIn={handleGoogleSignIn} newUser={newUser} setNewUser={setNewUser} handleSubmit={handleSubmit} handleBlur={handleBlur} loginError={loginError}></LoginForm>
        </div>
    );
};

export default Login;