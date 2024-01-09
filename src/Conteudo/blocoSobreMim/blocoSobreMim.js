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
                            <img src={fotoPerfil}
                                alt=''></img>
                            <br />
                            <button className='botao' type='button' >Currículo</button>
                        </div>

                        <div className='about-text'>
                            <h1>Sobre mim</h1>
                            <h5>Desenvolvedor <span className='front'>Frontend</span> </h5>
                            <p>
                                Meu nome é Diogo Favilla G. Jacintho tenho 22 anos e sou um profissional dedicado e fluente em inglês (formado), recém-formado em Análise e Desenvolvimento de Sistemas.
                                Nesta curta caminhada obtive sucessos como por exemplo Site da Associação da Polícia Federal, Loja virtual de artigos históricos entre outros nos quais tive co-participação. Diversos cursos com certificação e vários projetos pessoais (como este portfolio) que agregam valor a minha experiência.                            </p>

                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>

    )
}
