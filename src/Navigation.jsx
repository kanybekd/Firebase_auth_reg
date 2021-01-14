
import React, { Component } from 'react';
import {FaUsers} from "react-icons/fa"
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import {withRouter} from "react-router-dom";
class Navigation extends Component {
  constructor() {
    super()
    this.state = {
      dropdownOpen:false      
    }
  }
  toggle =()=>{
    this.setState({dropdownOpen:!this.state.dropdownOpen})
  }
  handleMeeting=()=>{
    this.props.history.push("/meeting")
  }
  handleRegister=()=>{
    this.props.history.push("/register")
  }
  handleLogin=()=>{
    this.props.history.push("/login")
  }
  handleHome=()=>{
    this.props.history.push("/")
  }

  render() {
    // console.log(this.props)
    const {user} = this.props
    return (
      <div id="navigation">
        <Nav pills>
        <NavItem>
          <NavLink href="#" active> <FaUsers className="mr-2"/>Meeting Log</NavLink>
        </NavItem>
        <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav caret>
            Menu
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {user && <NavItem>
          <NavLink href="#" onClick={this.handleMeeting}> Meeting</NavLink>
        </NavItem>}
        { user===null && 
        <>
        <NavItem>
          <NavLink href="#" onClick={this.handleLogin}>Login</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={this.handleRegister}>Register</NavLink>
        </NavItem>
        </>
        }
        <NavItem>
          <NavLink href="#" onClick={this.handleHome}>Home</NavLink>
        </NavItem>
        
      </Nav>
      
    </div>
    // <Link to="/meeting">Meeting</Link>
    )
  }
}
export default withRouter(Navigation);