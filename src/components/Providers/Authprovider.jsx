import {createUserWithEmailAndPassword } from "firebase/auth";
import { children, createContext, useState } from "react";
import auth from "../../firebase/firebase.config";
// import auth from '../firebase/firebase.config';



 export const AuthContext = createContext(null);


const Authprovider = ({children}) => {
const [user, setUser] = useState (null);


const createUser = (email, password) =>{
    return createUserWithEmailAndPassword (auth, email, password);

}



const authInfo = {user, createUser }

    return (
        <AuthContext.Provider value={authInfo } >

            {children}
            
        </AuthContext.Provider >
    );
};

export default Authprovider;