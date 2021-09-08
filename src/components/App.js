import React, { Component } from 'react'
import {auth} from '../index';

export class SignIn extends Component {

    state = {
        email: "",
        password: ""
    }

    handleSignIn = () => {
        auth.signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch(e => console.log(e));
    }

    handleSignUp = () => {
        auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(e => console.log(e));
    }

    handleLogOut = () => {
        auth.signOut();
    }

    componentDidMount = () => {
        console.log('Context Mounted');
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                console.log(user, "\nUser Logged In");
            }else{
                console.log("User not logged in!");
            }
        })
    }

    componentWillUnmount = () => {
        unsubscribe();
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} type="email" className="email" name="email"/>
                <input onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="password" className="password" name="password"/>
                <button onClick={this.handleSignIn}>Sign In</button>
                <button onClick={this.handleSignUp}>Sign Up</button>
                <button onClick={this.handleLogOut}>Logout</button>
            </div>
        )
    }
}

export default SignIn
