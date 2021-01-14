import React, { Component } from 'react'
import firebase from "./Firebase"
import {
    BrowserRouter as Router,
    Switch,
    Route,Redirect
  } from "react-router-dom";
import Navigation from "./Navigation"
import Welcome from "./Welcome"
import Home from "./Home"
import Register from "./Register"
import Login from "./Login"
import Meeting from "./Meeting"
import "./App.css"
class App extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             user:null,
             name:null,
             userID:null
        }
    }
    logout=(e)=>{
        e.preventDefault();
        this.setState({user:null,name:null,userID:null})
        firebase
            .auth()
            .signOut()
            
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged(FBUser=>{
            if(FBUser){
                this.setState({
                    user:FBUser,
                    name:FBUser.displayName,
                    userID:FBUser.uid
                })
            }
        })
        // const ref = firebase.database().ref("user");
        // ref.on("value",snapshot=>{
        //     let FBUser = snapshot.val();
        //     this.setState({user:FBUser})
        // })
    }
    registerUser=(userName)=>{
        console.log("username",userName)
        firebase.auth().onAuthStateChanged(FBUser=>{
            FBUser.updateProfile({
                displayName:userName
            }).then(()=>{console.log("username",FBUser.name)
                this.setState({
                    user:FBUser,
                    name:FBUser.displayName,
                    userID:FBUser.uid
                });
              
            })
        })
    }
    render() {
        console.log("name",this.state.name)
        console.log("FBUser",this.state.user)
        return (
          <Router>
            <div className="App">
                <Navigation user={this.state.user} />
                {this.state.user && <Welcome logout={this.logout} name={this.state.name} />}
                <Switch>
                    <Route exact path="/">
                        <Home path="/" user={this.state.user}/>
                    </Route>
                    <Route  path="/login">
                        <Login  />
                    </Route>
                    <Route  path="/meeting">
                        <Meeting />
                    </Route>
                    <Route  path="/register">
                        <Register  registerUser={this.registerUser}/>
                    </Route>
                </Switch>
            </div>
        </Router>
        )
    }
}


export default App;