import React from 'react'
import { Outlet } from 'react-router-dom'
import './blocoLinguagens.css'

import logoHtml from './imagensLinguagens/teste-removebg-preview.png'
import logoCss from './imagensLinguagens/css.png'
import logoJava from './imagensLinguagens/java-removebg-preview.png'
import logoType from './imagensLinguagens/typescript-removebg-preview.png'
import logoReact from './imagensLinguagens/png-transparent-react-computer-icons-redux-javascript-others-logo-symmetry-nodejs-thumbnail-removebg-preview.png'
import logoAngular from './imagensLinguagens/png-transparent-angularjs-spring-framework-web-application-others-angle-rectangle-logo-removebg-preview.png'
import logoMysql  from  './imagensLinguagens/kisspng-mysql-database-web-development-computer-icons-mysql-5b2cc2f2df70e6.4579243815296601469152-removebg-preview.png'
import logoPostgree from  './imagensLinguagens/62cdccb0e106734e1ce200aa-removebg-preview.png' 
import logoWordPress  from  './imagensLinguagens/download__1_-removebg-preview.png'
import logoApi  from  './imagensLinguagens/logoapi.png'
import logoDart from  './imagensLinguagens/images-removebg-preview.png'
import logoFlutter  from  './imagensLinguagens/Google-flutter-logo-removebg-preview.png'


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
          <h1 className='titulo-skills'>Skills titulo</h1>

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
                <img src={logoType} height='113px' width='230px' classname="html" id='foto-type' ></img>
              </div>
              <h3 className='descricao'>Typescript</h3>
            </div>

            <div className='card'>
              <div className='html'>
                <img src={logoReact} height='95px' width='180px' classname="html" ></img>
              </div>
              <h3 className='descricao'>React</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoAngular} height='95px' width='180px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Angular</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoMysql} height='95px' width='200px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Mysql</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoPostgree} height='95px' width='200px' classname="html" ></img>
              </div>
              <h3 className='descricao'>PostgresSQL</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoWordPress} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Wordpress</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoApi} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>API</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoFlutter} height='95px' width='100px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Flutter</h3>
            </div>

            <div className='card'>
            <div className='html'>
              <img src={logoDart} height='90x' width='200px' classname="html" ></img>
              </div>
              <h3 className='descricao'>Dart</h3>
            </div>
          </div>
          
        </div>

      </section>

      <Outlet />
    </div>
  )
}
