
import React, { Component } from 'react';
import { Button } from 'reactstrap';

export default class Home extends Component {
  constructor() {
    super()
  
    this.state = {
       
    }
  }
  
  render() {
    const {user} = this.props;
    return (
      <div className="Home">
        <p id="meeting">Meeting Logo</p> 
        
        <p id="text"> Ipsum obcaecati nulla, sed accusantium facilis adipisci, maiores tempore nam quasi eligendi corporis nesciunt numquam enim reiciendis possimus modi, corrupti quae esse?Sint, fuga autem. Suscipit voluptatem ea saepe velit unde autem, officia a quas esse inventore veritatis commodi quisquam, fuga enim? Consequuntur odio sit nulla quaerat at aliquid non optio est!</p>
        <div>
        {user===null && 
        <>
        <Button outline color="primary" className="mr-2">Register</Button>
        <Button outline color="primary" className="mr-2">Log In</Button>
        
        </>
        }
        {
          user && <Button color="primary">Meetings</Button>

        }
        </div>
      </div>
    )
  }
}

