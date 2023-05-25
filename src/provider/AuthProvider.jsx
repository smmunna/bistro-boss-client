import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)

    const createUser = (email,password) =>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth,email,password)
    }

    const updateUser = (user,name,photo)=>{
        return updateProfile(user, {
            displayName: name, photoURL: photo
          })
    }

    const loginUser = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

        // Store the Signin user info
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser);
                setLoading(false)
            })
            return () => {
                return unsubscribe();
            }
        }, [])

    const authInfo = {
        createUser,
        updateUser,
        loginUser,
        logOut,
        loading,
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
