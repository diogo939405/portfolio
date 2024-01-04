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
        // setProjetoSelecionado(idProjeto);
        // console.log(getDadosProjetos(projetoSelecionado))
        let x = document.getElementById('mostrar')
        let d = document.getElementById('descricao')
        // let t = document.getElementById('titu')
        // x.showModal()
        // x.classList.remove('close-dialogo');
        // x.classList.add('open-dialogo');
        if(d.style.display === "none"){
                d.style.display = 'flex'
        }else{
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
                <dialog class='dialogo' id='dialogo'>
                    <div className='janela'>
                        <h2 className='titulo-janela'>{getDadosProjetos(projetoSelecionado).titulo}</h2>
                        <p className='texto-janela'>{getDadosProjetos(projetoSelecionado).texto}
                        </p>
                        <div className='divBotao'>
                            <button onClick={hide} id='esconder' className='esconder'>OK</button>
                        </div>

                        {/* <Button icon="pi pi-search" severity="success" aria-label="Search" />
                    <Button label="Submit" link /> */}

                    </div>
                </dialog>
                <h1 className='titulo-projetos' id='titu'>Projetos</h1>
                <div className='main'>
                    <div className='circles' >
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(1) }} id='mostrar'>
                            <div className='circle' id='RB1'>
                                <div className='descricao' id='descricao'>
                                    <p className='descricao-texto'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    </p>
                                </div>
                            </div>
                        </button>

                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(2) }} id='mostrar'>
                            <div className='circle' id='Puc'>
                            </div>
                        </button>
                        <button className='bot' onClick={() => { show(); setProjetoSelecionado(3) }} id='mostrar'>
                        <div className='circle' id='Puc'>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <Outlet />
        </div>
    )
}
