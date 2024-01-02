import React from 'react'
import { Outlet } from 'react-router-dom'
import './blocoSobreMim.css'

export default function blocoSobreMim() {
    return (
        <div id='sobre'>
                <section >
                <div className='about'>
                    <div className='main'>
                        <img src='../../imagens/IMG_20231011_131628.jpg'
                            alt=''></img>
                        <div className='about-text'>
                        <h1>Sobre mim</h1>
                        <h5>Desenvolvedor <span className='front'>Frontend</span> </h5>
                        <p>
                            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </p>
                        <button className='botao' type='button'>Curriculo</button>
                        </div>
                    </div>
                    </div>
                    </section>
            <Outlet />
        </div>
       
    )
}
