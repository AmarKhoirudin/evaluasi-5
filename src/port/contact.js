import React, { Component } from "react";
import '../Components/components.css'

class Contact extends Component {
  render() {
    return (
      <div className="Container contact" id="contact">
        
        <div class="row justify-content-center">
          <div class="col-lg-4">
            <div class="card text-white bg-primary mt-3 text-center">
              <div class="card-body">
                <h1 class="card-title" id="contactus" >Contac Us</h1>
              </div>
            </div>
            <ul class="list-group m-3">
              <li class="list-group-item">
                <h1>My Location</h1>
              </li>
              <li class="list-group-item">Komplek Kodam Jaya K2/27 rt 3/15 </li>
              <li class="list-group-item">Kalideres, Jakarta Barat</li>
              
            </ul>
            <ul class="list-group p-3">
              <li class="list-group-item">
                <h1>Contact Me</h1>
              </li>
              <li class="list-group-item">My WA : 089611328096</li>
              <li class="list-group-item">Instagram : mar_4vic </li>
              <li class="list-group-item">Github : AmarKhoirudin</li>
              
            </ul>
          </div>
      </div>
      </div>
    );
  }
}

export default Contact;
