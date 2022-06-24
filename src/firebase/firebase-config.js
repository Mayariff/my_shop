// Initialize Firebase
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmzp3kHotlxoCy415Ye37oDP8KIDG9S4A",
    authDomain: "test-shope.firebaseapp.com",
    projectId: "test-shope",
    storageBucket: "test-shope.appspot.com",
    messagingSenderId: "702439272012",
    appId: "1:702439272012:web:b96ef3fff4c444d7854ee9",
    measurementId: "G-Z4ZXCW3NN4",
}

const app = initializeApp(firebaseConfig);

//доступ к базе данных
export const db = getFirestore(app);
//доступ к пройти аутентификацию с помощью Firebase
export const auth = getAuth();
//провайдер в любое время, когда нам нужно пройти аутентификацию в Google
export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });