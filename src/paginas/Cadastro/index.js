import api from '../../servicos/api'
import React, { Component } from "react";

class InserirJogo extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: '',
            imagem: ''
        }
        this.inserir = this.inserir.bind(this);
    }

    carregaNome = (event) =>{
        this.setState({ nome: event.target.value })
    }
    carregaImagem = (event) =>{
        this.setState({ imagem: event.target.value })
    }

    async inserir (){
        await api.post('inserirjogo', {
            nome: this.state.nome,
            imagem: this.state.imagem
        }).then((res)=>{
            window.location.href = '/';
        }).catch((err)=>{
            console.log(err);
        })
        
    }

    render(){
        return(
            <div>
                <h1>Inserir jogo</h1>
                <label>Nome</label><br/>
                <input type="text" size="100" value={this.state.nome} onChange={this.carregaNome}/><br/>
                <label>Imagem (URL)</label><br/>
                <input type="text" size="100" value={this.state.imagem} onChange={this.carregaImagem}/><br/>
                <button onClick={this.inserir}>inserir</button>
            </div>
        )
    }
}

export default InserirJogo;