import React from 'react'
import { Outlet } from 'react-router-dom'
import './Cabecalho.css'
import { ToggleP } from './CabecalhoService'
import { HashLink as Link } from 'react-router-hash-link';
export default function Cabecalho() {
    return (

        <div className='corpo'>
            <header className='cabecalho'>
                <div className='menu'>
                    <nav className='navbar'>
                        <p className='titulo'><span>D</span>iogo Favilla</p>
                        <ul className='corpo-menu'>
                            <li>
                                <Link to='#sobre' smooth >
                                    <a> Sobre mim</a>
                                </Link>
                            </li>
                            <li >
                                <Link to='#secao' smooth>
                                    <a>Linguagens</a>
                                </Link>
                            </li>
                            <li>
                                <Link to='#projetos' smooth>
                                    <a>Projetos</a>
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
