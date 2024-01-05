import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './blocoProjetos.css'
import './conteudo.js'
import logoPuc from './imagensProjetos/brasao_puc-rio-removebg-preview.png'
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

import { getDadosProjeto } from './conteudo.js';



export default function BlocoProjetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(-1);
    // let projeselecionado = -1;
    let getDadosProjetos = getDadosProjeto
    const show = () => {
        let d = document.getElementById('descricao')
        if (d.style.display === "none") {
            d.style.display = 'flex'
        } else {
            d.style.display = 'none'
        }


    }

    const hide = () => {
        let y = document.getElementById('dialogo')
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
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                    <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" style={
                                        {
                                            'height': '50px',
                                            'width': '180px',
                                            'fontWeight':'bold',
                                            'marginRight':'-8px'    
                                        }
                                    } />
                                </div>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                {/* <div className='legenda' id='descricao2'>
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                </div> */}
                            </div>

                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(5) }} id='mostrar'>
                            {/* <button className='bot-descricao'>oie</button> */}
                            <div className='circle' id='Puc'>
                                {/* <div className='legenda' id='descricao3'>
                                    <p className='descricao-texto'>teste {getDadosProjetos(projetoSelecionado).texto} Teste
                                    </p>
                                    <h1 className='descricao-texto'>teste</h1>
                                </div> */}
                                {/* <button className='bot-descricao'>oie</button> */}

                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <Outlet />
        </div>
    )
}
