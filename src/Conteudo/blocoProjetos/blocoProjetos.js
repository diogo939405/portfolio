import React, { useState,useRef } from 'react'
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

        window.location.href = novaUrl
        const novaAba = window.open(novaUrl, '_blank');

        if (novaAba) {
            novaAba.focus();
        } else {
            console.error('O bloqueio de pop-up pode ter impedido a abertura da nova aba.');

        }
    }


    return (
        <div>
               <Toast ref={toast} />

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
                                            <button className='link-projeto' style={{ "cursor": "pointer" }} onClick={redirecionar} target="_blank" rel="noopener noreferrer">Acesso ao Projeto</button>
                                            <a className='link-projeto' href={getDadosProjetos(projetoSelecionado).git} target="_blank" rel="noopener noreferrer">Codigo do Frontend</a>
                                            <a className='link-projeto' href={getDadosProjetos(projetoSelecionado).git} target="_blank" rel="noopener noreferrer">Codigo do Backend</a>
                                        </div>
                                        <span className='aviso'>*Pode ocorrer de não abrir em outra guia devido a política de segurança do browse</span>
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
