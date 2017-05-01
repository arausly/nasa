import React from 'react';
import ReactDOM  from 'react-dom';
import Input from './input.js';
import Log from './Log';

 export default class Emergency extends React.Component{
     render(){
         return(
               <div>
                  <div>
                     <Input />
                  </div>
                 <div>
                    <Log />
                  </div>
              </div>
         );
     }
}



