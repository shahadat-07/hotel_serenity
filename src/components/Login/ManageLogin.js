import firebase from "firebase/app";

export const userName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(function () {
        // Update successful.
    }).catch(error => {
        console.log(error);
    });
}


export const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}