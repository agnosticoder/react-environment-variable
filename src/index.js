import React from 'react';
import {render} from 'react-dom';
import SignIn from './components/App'

//Styles
import "./styles/styles.scss"

//import firebase core
import firebase from 'firebase/app';
//import firebase auth module
import 'firebase/auth';

//We need to prefix environment variable with REACT_APP_ in react in order to access the value inside the app
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID, 
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

console.log(config);
//Initalization of App
export const app = firebase.initializeApp(config);
export const auth = app.auth();




const App = () => {
    return(
        <div className="container">
            <h2 className="center">This is a Basic React App</h2>
            <h3>Here All the Editing Will Go</h3>
            <SignIn />
        </div>
    );
}


render(<App />, document.querySelector('.app'));