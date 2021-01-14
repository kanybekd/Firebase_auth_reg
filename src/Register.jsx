
import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import firebase from "./Firebase"
class Register extends Component {
  constructor(props) {
    super(props)
  
    this.state = {    
      name:"",
      email:"",
      password:"",
      confirmPass:"",
      errorMessage:""
    }
  }
  handleChange=(e)=>{
    const itemChange = e.target.name
    this.setState({[itemChange]:e.target.value},()=>{
      if(this.state.password!==this.state.confirmPass){
        this.setState({errorMessage:"Password does not match"})
      }else{
        this.setState({errorMessage:""})
      }
    })
  }
  handleSubmit=(e)=>{
    var registrationInfo = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password,
    }
    e.preventDefault();
    firebase
    .auth()
    .createUserWithEmailAndPassword(
      registrationInfo.email,
      registrationInfo.password
    ).then(()=>{
      this.props.registerUser(registrationInfo.name)
    })
    .catch(err=>{
      if(err.message !== null){
        this.setState({errorMessage:err.message})
      }else{
        this.setState({errorMessage:""})
      }
    })
    // setTimeout(()=>{
    //   this.props.history.push("/")
    // },1000)
   
  }

  
  render() {
    // const {user} = this.props
    // console.log("name",this.state.confirmPass)
    return (
    <Form className="formgroup" onSubmit = {this.handleSubmit}>
      <FormGroup>
        
        <Label for="name">Name</Label>
        <Input type="Name" name="name" id="name" onChange={this.handleChange} value={this.state.name} />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" onChange={this.handleChange} value={this.state.email} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" onChange={this.handleChange} value={this.state.password} />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Confirm Password</Label>
        <Input type="password" name="confirmPass" id="examplePassword" onChange={this.handleChange} value={this.state.confirmPass}/>
        {this.state.confirmPass && <Label id="errmessage" for="err">{this.state.errorMessage}</Label>}
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

export default withRouter(Register);