import React from 'react'

export const Contacto = () => {
  return (
    <div className='page'>

      <h1 className='heading'>Contacto</h1>

      <form className='contact' action='mailto:wilmerarenas24@gmail.com'>
        <input type='text' placeholder='Nombres'/>
        <input type='text' placeholder='Apellidos'/>
        <input type='text' placeholder='Email'/>
        <textarea type='text' placeholder='Motivo de contacto'/>
        <input type='subtmit' value='Enviar'/>
      </form>
      
    </div>
  )
}
