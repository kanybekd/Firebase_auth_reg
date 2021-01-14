
import React, { Component } from 'react';
// import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase from "./Firebase"
class Login extends Component {
  constructor(props) {
    super(props)
  
    this.state = {    
      email:"",
      password:"",
      errorMessage:""
    }
  }
  handleChange=(e)=>{
    const itemChange = e.target.name
    this.setState({[itemChange]:e.target.value})
  }
  handleSubmit=(e)=>{
    var registrationInfo = {
      email:this.state.email,
      password:this.state.password,
    }
    e.preventDefault();
    firebase
    .auth()
    .signInWithEmailAndPassword(
      registrationInfo.email,
      registrationInfo.password
    )

    .catch(err=>{
      if(err.message !== null){
        this.setState({errorMessage:err.message})
      }else{
        this.setState({errorMessage:"",password:""})
      }
    })
  }

  
  render() {
    // const {user} = this.props
    // console.log("name",this.state.confirmPass)
    return (
    <Form className="formgroup" onSubmit = {this.handleSubmit}>
     
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} value={this.state.email} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} value={this.state.password} />
        {this.state.errorMessage && <Label id="errmessage" for="err">{this.state.errorMessage}</Label>  }    
      </FormGroup>
         
      {/* <FormGroup>
        <Label for="exampleSelect">Select</Label>
        <Input type="select" name="select" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>
      </FormGroup> */}
      <Button color="primary" >Submit</Button>
    </Form>
    
    )
  }
}

export default Login;