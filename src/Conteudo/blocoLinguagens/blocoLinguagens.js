import React from 'react'
import { Outlet } from 'react-router-dom'
import './blocoLinguagens.css'

import logoHtml from './imagensLinguagens/teste-removebg-preview.png'
import logoCss from './imagensLinguagens/css.png'
import logoJava from './imagensLinguagens/java-removebg-preview.png'

export default function blocoLinguagens() {

  // const scroll = () =>{
  //   if(window.scrollY >= 20){
  //     document.getElementById('container1').style.display ='flex';
  //   }else{
  //     document.getElementById('container1').style.display ='none';
  //   }
  // } 

  // window.addEventListener('scroll',scroll)

  return (
    <div>
      <section className='secao' id='secao'>
        <div className='container' id='container1'>
          <h1>Skills titulo</h1>

          <div className='cards'>
            <div className='card'>
              <div class='html'>
                <img src={logoHtml} height='95px' width='100px' alt='oie'  ></img>
              </div>
              <h3 class='descricao'>HTML</h3>

              {/* <p>Skills 1 </p> */}
            </div>

            <div className='card'>
              <div class='html'>
                <img src={logoCss} height='98px' width='120px' classname="html" ></img>
              </div>
              <h3 className='descricao'>CSS</h3>

            </div>

            <div className='card'>
              <div class='html'>
                <img src={logoJava} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Javascript</h3>
            </div>

            <div className='card'>
              <div className='html'>
                <img src={logoHtml} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>HTML</h3>
            </div>

            <div className='card'>
              <div className='html'>
                <img src={logoHtml} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>HTML</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoHtml} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>HTML</h3>
            </div>
          </div>
        </div>

      </section>

      <Outlet />
    </div>
  )
}
