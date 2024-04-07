import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../firebase/firebse.init";

export const AuthContex = createContext(null)


const AuthContexComponent = ({children}) => {
    
    const registerWithEmailPassoward = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    const authInfo = {registerWithEmailPassoward}
    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthContexComponent;