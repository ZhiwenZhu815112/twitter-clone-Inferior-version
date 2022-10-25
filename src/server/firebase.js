import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

import React, { useContext, useEffect, useState} from 'react';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCrgLvM6SBem8onogMFtGN3YsmlPDbzz5Y",
    authDomain: "twitter-eeb4a.firebaseapp.com",
    databaseURL: "https://twitter-eeb4a-default-rtdb.firebaseio.com",
    projectId: "twitter-eeb4a",
    storageBucket: "twitter-eeb4a.appspot.com",
    messagingSenderId: "473307433330",
    appId: "1:473307433330:web:21ac2ad8dc1cef683275eb",
    measurementId: "G-B275MGE18T"
};

// Auth function and Auth provider


const firebaseApp = firebase.initializeApp(firebaseConfig);

// const storage = firebaseApp.storage();
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const AuthContext = React.createContext();

function useAuth() {
    return useContext(AuthContext);
};

function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState("");
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email,password); 
    }


    function login(email, password) {
        return auth.signInWithEmailAndPassword(email,password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword (email) {
        return auth.sendPasswordResetEmail(email)
    }
    


    useEffect(() => {
        const unsubscriber = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        })

        return unsubscriber;
    },[]);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword
    }

    return (
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
    );
};

export { auth,useAuth,AuthProvider, db};