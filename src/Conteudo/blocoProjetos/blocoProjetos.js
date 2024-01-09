import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './blocoProjetos.css'
import './conteudo.js'
import logoPuc from './imagensProjetos/brasao_puc-rio-removebg-preview.png'
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

import { Url } from './link'
import { getDadosProjeto } from './conteudo.js';


let rlu = Url
export default function BlocoProjetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(-1);

    // let projeselecionado = -1;
    let getDadosProjetos = getDadosProjeto
    const show = () => {
        let d = document.getElementById('descricao')
        if (d.style.display === "none") {
            d.style.display = 'block'
        } else {
            d.style.display = 'none'
        }


    }

    const hide = () => {
        let h = document.getElementById('descricao')
        if (h.style.display === "flex") {
            h.style.display = 'none'
        }
        // let t = document.getElementById('titu')
        // t.style.display = 'block'
        // y.close()
        // console.log('clicou')
        // // y.classList.remove('open-dialogo');
        // y.classList.add('close-dialogo');


    }

    return (
        <div>
            <section className='sec' id='projetos'>
                <h1 className='titulo-projetos' id='titu'>Projetos</h1>
                <div className='main'>
                    <div className='circles' >
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(1) }} id='mostrar'>
                            <div className='circle' id='RB1'>
                                <div className='legenda' id='descricao'>
                                    <div style={{ "display": "block" }}>
                                        <p className='descricao-texto' id='cancelar'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                        <a className='link-projeto' href={getDadosProjetos(projetoSelecionado).link} target="_blank" rel="noopener noreferrer">Acesse o Projeto</a>
                                        <br/>
                                        {/* <span>Clique aqui no quadro para fechar</span> */}
                                    </div>
                                </div>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                <div className='legenda' id='descricao'>
                                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" onClick={hide} />
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                </div>
                            </div>

                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(3) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                <div className='legenda' id='descricao'>
                                    <p className='descricao-texto'>teste {getDadosProjetos(projetoSelecionado).texto}                       </p>

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
