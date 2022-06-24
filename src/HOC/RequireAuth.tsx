import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


// @ts-ignore
const RequireAuth = ({children}) => {
    const location = useLocation()
    const {auth}= useContext(Context)
    const [user]= useAuthState(auth)

    if(!user){return <Navigate to={'/login'}  state={{from: location}}/>}
        return children

};

export default RequireAuth;