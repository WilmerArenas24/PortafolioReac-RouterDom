import React from 'react'
import { Link } from 'react-router-dom'
import { ListadoTrabajos } from './ListadoTrabajos'

export const Inicio = () => {
  return (
    <div className='home'>
      
      <h1>¡Hola! Soy Wilmer Arenas, un <strong>desarrollador web junior</strong> con sede en Bogotá. Me especializo en <strong>programación y desarrollo web</strong>, y estoy listo para colaborar en una amplia variedad de proyectos.</h1>


      <h2 className='title'>
        Te ayudo a crear tu sitio web, tener más visibilidad y relevancia en internet.<Link to="/contacto">Contacta conmigo. </Link>
      </h2>

      <section className='lasts-works'>
        <h2 className='heading'>Algunos de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarollo web.</p>

      <ListadoTrabajos limite="3"/>

      </section>


    </div>
  )
}
