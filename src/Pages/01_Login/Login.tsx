import React, {useContext} from 'react';
import {signInWithPopup} from "firebase/auth";
import {useLocation, useNavigate} from "react-router-dom";
import {provider} from "../../firebase/firebase-config";
import {Context} from "../../index";
import  s from './Login.module.scss'

const Login = () => {
    const {auth} = useContext(Context);
      const navigate = useNavigate();
      const location = useLocation();
      // @ts-ignore
    const  fromPage = location?.state?.from.pathname|| '/'


    const loginWithGoogle = async () => {
        provider.setCustomParameters({ prompt: 'select_account' })
        const {user} = await signInWithPopup(auth, provider)
        navigate(fromPage, {replace:true})
          /*  .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if (credential) {const token = credential.accessToken};
                // The signed-in user info.
                const user = result.user;
                // redux action? --> dispatch({ type: SET_USER, user });
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });*/
    };


    return (
        <div className={s.login}>
           Login
        <button onClick={loginWithGoogle}> Войти с помощью Гугл</button>
        </div>
    );
};

export default Login;