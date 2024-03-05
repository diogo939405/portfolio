import React from 'react'
import { Outlet } from 'react-router-dom'
import './blocoSobreMim.css'
import fotoPerfil from './perfil.jpeg'
export default function blocoSobreMim() {
    return (
        <div id='sobre'>
            <section >
                <div className='about'>
                    <div className='main'>
                        <div className='imagem-botões'>
                            <img className='foto-perfil' src={fotoPerfil}
                                alt=''></img>
                            <br />
                            <div className='curriculo-botão'>
                            <a href='https://drive.google.com/file/d/14tOQ1ItVZIJBqXxbrOV6N4FboYnRhUxl/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <button className='botao' type='button' >Currículo</button> </a>
                           <a href='https://drive.google.com/file/d/19K4maJq73i__ByZLnJUH7t1ssOE5J1za/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <button className='botao' type='button' >Resume</button> </a>
                            </div>
                           
                        </div>

                        <div className='about-text'>
                            <h1>Sobre mim</h1>
                            <h5>Diogo.Favilla@gmail.com</h5>
                            <h5>Telefone:21-97360-7207</h5>
                            <p>
                                Meu nome é Diogo Favilla G. Jacintho tenho 22 anos e sou um profissional dedicado e fluente em inglês (formado), recém-formado em Análise e Desenvolvimento de Sistemas.
                                Nesta curta caminhada obtive sucessos como por exemplo Site da Associação da Polícia Federal, Loja virtual de artigos históricos entre outros nos quais tive co-participação. Fiz Diversos cursos com certificação e vários projetos pessoais (como este portfolio) que agregam valor a minha experiência.                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>

    )
}
