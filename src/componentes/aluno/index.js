import React, {Component} from 'react';
import './style.css'

class Aluno extends Component{
    constructor (props){
    super (props);
    this.state ={
        nome: this.state.ra,
        media: ''
    }
}

    mostrarNota = () =>{
        this.setState(
            {
                media: this.props.media
            }
        )
        
    }

    render (){
        return(
            <div className = "card">
                <h1>Nome: {this.state.nome}</h1>
                <h2>RA: {this.state.ra} </h2>
                <h2>{this.state.media}</h2>
                <button onClick= {this.mostrarNota}>Mostrar nota</button>
            </div>
            

        )
        }
    }



export default Aluno;



