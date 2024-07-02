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
                                Olá! Meu nome é Diogo Favilla Gonçalves Jacintho.
                                Sou formado em Análise e Desenvolvimento de Sistemas e em Língua Inglesa pelo Brasas. Tenho paixão por tecnologia e aprendizado constante.
                                Foco principalmente em frontend, criando interfaces intuitivas e atraentes, mas também possuo bom conhecimento em backend. Sou determinado, trabalho bem em equipe e já tive papéis de liderança.
                                Participei de projetos que utilizam CRUD integrado a um site do WordPress, um site de pagamentos com Mercado Pago API e um aplicativo mobile utilizando Flutter. Sempre em busca de novos desafios, estou disponível para mudanças e novas oportunidades.
                                Obrigado por visitar meu portfólio! Sinta-se à vontade para explorar meus projetos e entrar em contato.</p>

                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>

    )
}
