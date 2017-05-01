import React from 'react';
import ReactDOM  from 'react-dom';
import Input from './input.js';
import Log from './Log';
import getData from './getData';

 export default class Emergency extends React.Component{
      constructor(props){
        super(props);
        this.state = {
             responseData:[]
        };
      }   
    handleUpdate(){
      const PATH_BASE = "http://firefightapp.herokuapp.com/api/v1/reports";
 fetch(`${PATH_BASE}`, {method:'GET'}).then(response => response.json()).then(json =>{ 
     var data = json.data;
     data.map((key) =>{
        this.setState({responseData:`${key.fire_location}  ${key.phone_number} ${key.trapped_people} ${key.fire_magnitude}`}); 
     });
    });
    }
     componentDidMount(){
         this.handleUpdate();
     }
     render(){
         return(
               <div>
                  <div>
                     <Input />
                  </div>
                 <div>
                    <Log  body = {this.state.responseData}/>
                  </div>
              </div>
         );
     }
}



