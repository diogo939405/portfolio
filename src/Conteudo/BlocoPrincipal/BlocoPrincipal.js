import React from 'react'
import { Outlet } from 'react-router-dom'
import Cabecalho from '../../Cabeçalho/Cabecalho'
import blocoSobreMim from '../blocoSobreMim/blocoSobreMim'
import blocoLinguagens from '../blocoLinguagens/blocoLinguagens'
import blocoProjetos from '../blocoProjetos/blocoProjetos'
import './BlocoPrincipal.css'

let SobreMim = blocoSobreMim
let Linguagens = blocoLinguagens
let Projetos = blocoProjetos
export default function BlocoPrincipal() {
  return (
    <div>
      <header>
        <Cabecalho/>
      </header>
      <section className='sobre'><SobreMim /></section>
       
     
      
      
      <section><Linguagens /></section>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>





      <section><Projetos /></section>
      <Outlet />
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div>
  )
}
