import React , { Component } from 'react';
import './home.css'
import {Link} from 'react-router-dom'
import api from '../../servicos/api'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            jogos: [],
            modal: false,
            id: 0,        //LINHA NOVA
            nomeEdit: '',     //LINHA NOVA
            imagemEdit: ''    //LINHA NOVA 
        }
    }

    toggle = ()=>{
        this.setState({
            modal: !this.state.modal
        })
    }

    editarNome = (event) =>{            //LINHA NOVA
        this.setState({                 //LINHA NOVA
            nomeEdit: event.target.value    //LINHA NOVA
        })                              //LINHA NOVA
    }
    editarImagem = (event) =>{          //LINHA NOVA
        this.setState({                 //LINHA NOVA
            imagemEdit: event.target.value  //LINHA NOVA
        })                              //LINHA NOVA
    }                                   //LINHA NOVA

    editar = (id) =>{                    //LINHA NOVA
        this.state.jogos.map( (jogo)=>{ //LINHA NOVA
            if(jogo.id === id){         //LINHA NOVA
                this.setState({         //LINHA NOVA
                    idEdit: id,         //LINHA NOVA
                    nomeEdit: jogo.nome,    //LINHA NOVA
                    imagemEdit: jogo.imagem //LINHA NOVA
                })                          //LINHA NOVA
            }                               //LINHA NOVA
        })                                  //LINHA NOVA
    }                                       //LINHA NOVA

    salvar = () =>{
        api.post(`editar/${this.state.idEdit}`, {
            nome: this.state.nomeEdit,
            imagem: this.state.imagemEdit
        }).then(()=>{
            window.location.href = '/'
        })
    }

    async getJogos(){
        await api.get('jogos')
        .then((res)=>{
            this.setState({
                jogos: res.data
            })
        }).catch(()=>{
            console.log("erro na requisição");
        })
    }

    componentDidMount(){
       //console.log(this.state.jogos);  // busca os dados na API
        this.getJogos();
    }

    render(){
        return(
            <div className="container">
                <div className="lista-jogos">
                    {
                        this.state.jogos.map((jogo)=>{
                            return(
                                <div key={jogo.id}>
                                    <h1>{jogo.nome}</h1>
                                    <img src={jogo.imagem}/>
                                    <Button color="warning"  onClick={()=>{this.toggle(); this.editar(jogo.id)}}>Editar Jogo</Button>
                                </div>
                            )
                        })
                    }
                </div>
                <Modal size="lg" isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Editar jogo</ModalHeader>
                        <ModalBody>

                            <label>Nome</label><br/>
                            <input type="text" size="100" value={this.state.nomeEdit} onChange={this.editarNome}/><br/>
                            <label>Imagem (URL)</label><br/>
                            <input type="text" size="100" value={this.state.imagemEdit} onChange={this.editarImagem}/>
                        
                        </ModalBody>
                        <ModalFooter>
                        <Button color="primary" onClick={this.salvar}>Salvar</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
                        </ModalFooter>
                    </Modal>
            </div>
        )
    }
}

export default Home;