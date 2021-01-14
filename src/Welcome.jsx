
import React, { Component } from 'react';


export default class Welcome extends Component {
  constructor() {
    super()
  
    this.state = {
       
    }
  }
  
  render() {
    const {name} = this.props
    return (
      <div className="text-secondary">
       <span id="welcomemsg">Welcome {" "}{name}{", "}</span> 
        <a href="#" onClick={this.props.logout}>Log Out</a>
      </div>
    )
  }
}

