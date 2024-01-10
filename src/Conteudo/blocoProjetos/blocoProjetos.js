import React, { useState, useRef } from 'react'
import { Outlet } from 'react-router-dom'
import './blocoProjetos.css'
import './conteudo.js'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import { Toast } from 'primereact/toast';
import { getDadosProjeto } from './conteudo.js';



export default function BlocoProjetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(-1);
    const toast = useRef(null);

    let getDadosProjetos = getDadosProjeto
    const show = () => {
        let d = document.getElementById('descricao')
        if (d.style.display === "none") {
            d.style.display = 'block'
        } else {
            d.style.display = 'none'
        }
    }

    const redirecionar = () => {
        let novaUrl = getDadosProjetos(projetoSelecionado).link

        if (novaUrl === '') {
            return showInfo()
        } else {

            window.location.href = novaUrl
            const novaAba = window.open(novaUrl, '_blank');

            if (novaAba) {
                novaAba.focus();
            } else {
                console.error('O bloqueio de pop-up pode ter impedido a abertura da nova aba.');

            }
        }
    }



    const aviso = () => {
        if (getDadosProjetos(projetoSelecionado).git === '') {
            return showInfo()
        } else {
            return redirecionarGit(); // getDadosProjetos(projetoSelecionado).git
        }

    }

    const redirecionarGit = () => {

        let novaUrla = getDadosProjetos(projetoSelecionado).git

        window.location.href = novaUrla
        const novaAba = window.open(novaUrla, '_blank');

        if (novaAba) {
            novaAba.focus();
        } else {
            console.error('O bloqueio de pop-up pode ter impedido a abertura da nova aba.');

        }

    }

    const showInfo = () => {
        toast.current.show({
            severity: 'info',
            summary: 'Atenção',
            detail: 'Devido ao fato de ser um projeto que contém dados vitais ao cliente, não foi possível liberar o código fonte de forma pública, caso queira acessar entrar em contato.',
            life: 3000
        });
    }

    return (
        <div>
            <Toast ref={toast} />

            <button onClick={showInfo}></button>

            <section className='sec' id='projetos'>
                <h1 className='titulo-projetos' id='titu'>Projetos</h1>
                <div className='main'>
                    <div className='circles' >
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(1) }} id='mostrar'>
                            <div className='circle' id='RB1'>
                                <div className='legenda' id='descricao'>


                                    <div style={{ "display": "block" }}>
                                        <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                        <div className='botoes-descricao'>
                                            <button className='link-projeto' style={{ "cursor": "pointer" }} onClick={redirecionar}>Acesso ao Projeto</button>
                                            <button className='link-projeto' style={{ "cursor": "pointer" }} onClick={aviso}>Codigo do Frontend</button>
                                            <button className='link-projeto' style={{ "cursor": "pointer" }} onClick={aviso}>Codigo do Backend</button>
                                        </div>
                                        <span className='aviso'>*Pode ocorrer de não abrir em outra guia, ao clicar o botão, devido a política de segurança do browse</span>
                                    </div>

                                </div>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                <div className='legenda' id='descricao'>
                                </div>
                            </div>

                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(3) }} id='mostrar'>
                            <div className='circle' id='Barbara'>
                                <div className='legenda' id='descricao'>
                                </div>


                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <Outlet />
        </div>
    )
}
