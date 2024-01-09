import React from 'react'
import { Outlet } from 'react-router-dom'
import './Cabecalho.css'
import { HashLink as Link } from 'react-router-hash-link';
import logo from "./../imagens/logo_diogo-removebg-preview.png"
export default function Cabecalho() {
    return (

        <div className='corpo'>
            <header className='cabecalho'>
                <div className='menu'>
                    <nav className='navbar'>
                        <p className='titulo'>
                            <img src={logo} height='60px' width='60px' alt='oie' className='logo-img'></img>
                            <h4 className='logo-texto'>Diogo Favilla system developer</h4>
                        </p>
                        <ul className='corpo-menu'>
                            <li>
                                <Link to='#sobre' smooth >
                                    <a className='link-menu'> Sobre mim</a>
                                </Link>
                            </li>
                            <li >
                                <Link to='#secao' smooth>
                                <a className='link-menu' style={{'text-decoration' : 'none'}}>Linguagens</a>
                                </Link>
                            </li>
                            <li>
                                <Link to='#projetos' smooth>
                                <a className='link-menu'>Projetos</a>
                                </Link>

                            </li>
                        </ul>
                    </nav>
                </div>

            </header>

            <Outlet />
        </div>

    )
}
