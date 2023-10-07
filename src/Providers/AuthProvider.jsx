import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);
const provider = new GoogleAuthProvider();
const gitProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user information: ', currentUser)
            setUser(currentUser)
            setLoader(false)
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const gitSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, gitProvider)
    }


    const signIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    const authInfo = { user, createUser, googleSignIn, gitSignIn, logOut, signIn, loader }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;