import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

class Header extends Component{
   
    render(){
        return(
            <div className="header">
                <Link className="logo" to="/"> jogostop.com </Link>
                <Link className="fav" to="/favoritos">Favoritos</Link>
            </div>
        )
    }
}

export default Header;
