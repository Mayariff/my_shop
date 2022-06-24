import React, {useContext} from 'react';
import Routing from "../Routing/Routing";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";
import Loader from "../feaches/Loader/Loader";



function App() {
    const {auth}= useContext(Context)
    const [user, loading, error]= useAuthState(auth)

  if (loading) return <Loader/>
  return  <Routing />
}

export default App;
