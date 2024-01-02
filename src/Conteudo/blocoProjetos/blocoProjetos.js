import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './blocoProjetos.css'
import './conteudo.js'

import { Button } from 'primereact/button';
import { getDadosProjeto } from './conteudo.js';



export default function BlocoProjetos() {
    const [projetoSelecionado, setProjetoSelecionado] = useState(-1);
    // let projeselecionado = -1;
    let getDadosProjetos = getDadosProjeto
    const show = () => {
        // setProjetoSelecionado(idProjeto);
        // console.log(getDadosProjetos(projetoSelecionado))
        let x = document.getElementById('dialogo')
        let t = document.getElementById('titu')
        t.style.display = 'none'
        x.showModal()
        x.classList.remove('close-dialogo');
        x.classList.add('open-dialogo');

    }

    const hide = () => {
        let y = document.getElementById('dialogo')
        let t = document.getElementById('titu')
        t.style.display = 'block'
        y.close()
        console.log('clicou')
        // y.classList.remove('open-dialogo');
        y.classList.add('close-dialogo');


    }

    return (
        <div>


            <section className='sec' id='projetos'>
                <dialog class='dialogo' id='dialogo'>
                    <div className='janela'>
                        <h2 className='tituu'>{getDadosProjetos(projetoSelecionado).titulo}</h2>
                        <p className='texto'>{getDadosProjetos(projetoSelecionado).texto}
                        </p>
                        <div className='divBotao'>
                            <button onClick={hide} id='esconder' className='esconder'>OK</button>
                        </div>

                        {/* <Button icon="pi pi-search" severity="success" aria-label="Search" />
                    <Button label="Submit" link /> */}

                    </div>
                </dialog>
                <h1 className='titu' id='titu'>Projetos</h1>
                <div className='main'>
                    <div className='circles'>
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(1) }} id='mostrar'>
                            <div className='circle'>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle'>
                            </div>
                        </button>
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(3) }} id='mostrar'>
                            <div className='circle'>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            {/* <div className='main'>
            <div className='titulo'>
            <h1>oie</h1>
            </div>
            
        </div> */}

            <Outlet />
        </div>
    )
}
