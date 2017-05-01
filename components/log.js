import React from 'react';
import ReactDOM from 'react-dom';



export default class Log extends React.Component{
    render(){
        return(
              <div className = "log_parent col-lg-6 col-lg-offset-1">
                  <div className = "">
                      <table>
                           <thead>
                              <th>Conversation</th>
                              <th> Time </th>
                              <th>Status </th>
                           </thead>
                           <tbody>
                              <tr>
                                {this.props.body}
                              </tr>
                           </tbody>
                      </table>
                  </div>      
              </div>      
        );
    }
}