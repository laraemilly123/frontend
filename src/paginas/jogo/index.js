import React ,{Component} from 'react';
import jogos from '../../servicos/dados'
import './CardJogo.css'
import {Link, Redirect} from 'react-router-dom'


class Jogo extends Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.id,
            jogo: {}
        }
    }

    componentDidMount(){
        function getJogo(id){
            for(var i = 0; i < jogos.length; i++){
                if(jogos[i].id == id){
                    return jogos[i];
                }
            }
            window.location = '/'
            
        }

        this.setState({
            jogo: getJogo(this.state.id)
        })
        
    }

    render(){
        return(
            <div className="jogo">
                <img src={this.state.jogo.imagem} />
                <h1>{this.state.jogo.nome}</h1>
                <p> {this.state.jogo.desc}</p>

            </div>
        )
    }
}

export default Jogo;