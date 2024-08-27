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
                                <a href='https://drive.google.com/file/d/1988vctEyHRx3Cjbpamw95k3nmT6lLzrk/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <button className='botao' type='button' >Currículo</button> </a>
                                <a href='https://drive.google.com/file/d/1ZUyKEgx9Vm00VLdothi6-TR5in_xz4NB/view?usp=sharing' target="_blank" rel="noopener noreferrer"> <button className='botao' type='button' >Resume</button> </a>
                            </div>

                        </div>

                        <div className='about-text'>
                            <h1>Sobre mim</h1>
                            <h5>Diogo.Favilla@gmail.com</h5>
                            <h5>Telefone:21-97360-7207</h5>
                            <p>
                                Olá! Meu nome é Diogo Favilla Gonçalves Jacintho.
                                Sou formado em Análise e Desenvolvimento de Sistemas e em Língua Inglesa pelo Brasas, com proficiência em inglês B2. Tenho uma verdadeira paixão por tecnologia e aprendizado constante.
                                Atuo como desenvolvedor Fullstack, com maior conhecimento em Frontend, criando interfaces intuitivas e atraentes, mas também possuo bom domínio em Backend. Sou determinado, trabalho bem em equipe e já tive papéis de liderança. Participei de diversos projetos, incluindo um sistema CRUD integrado a um site WordPress, um site de pagamentos com a API do Mercado Pago, e um aplicativo mobile utilizando Fluttere entre outros diversos projetos pessoais.
                                Estou sempre em busca de novos desafios, com disponibilidade para mudanças e novas oportunidades.
                                Obrigado por visitar meu portfólio! Sinta-se à vontade para explorar meus projetos e entrar em contato.</p>

                        </div>
                    </div>
                </div>
            </section>
            <Outlet />
        </div>

    )
}
