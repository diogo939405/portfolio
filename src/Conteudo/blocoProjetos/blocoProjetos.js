import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './blocoProjetos.css'
import './conteudo.js'
import logoPuc from './imagensProjetos/brasao_puc-rio-removebg-preview.png'

import { Button } from 'primereact/button';
        
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
                                <div className='descricao' id='descricao'>
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                  
                                </div>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                <div className='descricao' id='descricao'>
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
                                </div>
                            </div>
                            
                        </button>
                        
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(3) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                                <div className='descricao' id='descricao'>
                                    <p className='descricao-texto'>{getDadosProjetos(projetoSelecionado).texto}</p>
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
