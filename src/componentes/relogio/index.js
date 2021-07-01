import React, {Component} from 'react';
import './style.css'



class Relogio extends Component{
    constructor (props){
    super (props);
    this.state = {
        hora: '00:11:22'
    }


    }
   componentDidMount (){
       setInterval( ()=> {
       this.setState(
           {
               hora:new Date().toLocaleTimeString()}
       )

       },1000);

    }

    componentDidUpdate(){
        console.log ('teste');
    }

  render (){
      return(
          <div>
              <div className= "modelo">
         <h1>{this.state.hora} </h1>
        
         </div>
        </div>
          
      )
  }
  
  }
  
  export default Relogio; 