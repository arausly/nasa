import React from 'react';
import ReactDOM from 'react-dom';



export default class Log extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        const PATH_BASE = "http://firefightapp.herokuapp.com/api/v1/reports";
        fetch(`${PATH_BASE}`, {method:'GET'}).then(response => console.log(response + "hjjhhjej"));
        return(
              <div className = "log_parent col-lg-6 col-lg-offset-1">
                  <div className = "">
                      <table>
                           <thead>
                            <th> Conversation</th>
                            <th> Time</th>
                            <th> Status</th>
                           </thead>
                      </table>
                  </div>      
              </div>      
        );
    }
}