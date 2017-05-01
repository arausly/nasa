import React from 'react';
import ReactDOM from 'react-dom';

export default class Input extends React.Component{
     render(){
         return(
              <div className = "input_parent col-lg-4">
                  <div className = "form-group ">
                     <input type = "text" placeholder ="Phone Number" className = "form-control" ref = {node => this.pnum = node} />
                     <input type = "text" placeholder ="Fire Location" className = "form-control" ref = {node => this.firlo = node} />
                     <div className = "radio">
                      <label><input type = "radio"  /> small</label>
                      <label><input type = "radio"  /> medium</label>
                      <label><input type = "radio"  /> large</label>
                     </div>
                     <input type = "text" placeholder ="Fire Origin e.g fuel,Gas" className = "form-control" ref = {node => this.firorg = node} />
                     <input type = "text" placeholder = "Fire Object" className = "form-control" ref = {node => this.firobj = node} />
                     <input type = "text" placeholder ="Trapped People" className = "form-control" ref = {node => this.Trappl = node} />
                     <div>
                       <input type ="button" className = "btn btn-primary btn-lg btn-md" value = "Submit"/>
                     </div>
                   </div>
              </div>
         );
     }
}
