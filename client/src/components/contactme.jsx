import React, { Component } from 'react';
import styled from "styled-components";




const ContactMeform = styled.div`

span {
  color: green;

}


`



class contactme extends Component {

    
    
    render() {
        return (
            <div>


  <form>
    <ContactMeform>
<div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Name:</span>
  <input type="text" className="form-control" placeholder="Name" aria-describedby="basic-addon1"/>
</div>
              
<div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Company:</span>
  <input type="text" className="form-control" placeholder="Company Name" aria-describedby="basic-addon1"/>
</div>

<div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Number:</span>
  <input type="text" className="form-control" placeholder="Contact #" aria-describedby="basic-addon1"/>
</div>

<div className="input-group">
  <span className="input-group-addon" id="basic-addon1">Email:</span>
  <input type="text" className="form-control" placeholder="Email" aria-describedby="basic-addon1"/>
</div>
<button className="btn btn-success" type="submit">Button</button>
</ContactMeform>
</form>
            </div>
        );
    }
}

export default contactme;