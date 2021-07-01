import React, {Component} from 'react'

class Card extends Component{
 constructor (props){
     super (props);
     this.state = {
         i:0, 
      cor: ['black', 'green', 'pink', 'red', 'purple' ]
     }
 }
mudaCor = ()=>{
    this.setState ({ i: this.state.i +1})
    }

 render(){
     return(
         <div style= {{background: this.state.cor [this.state.i]}}>
             <h1> Lara 2CI </h1>
             <button onClick= {this.mudaCor}> change color</button>
         </div>
     )
 }

}

export default Card 