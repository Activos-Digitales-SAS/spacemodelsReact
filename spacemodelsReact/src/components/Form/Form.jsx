import React from 'react'
import styles from './Form.module.css'

const Form = () => {
  return (
    <div className={styles.Form}>
        <h1>TE CONTACTAMOS</h1>
        <form action="">
            <label htmlFor="">Tu mejor correo *</label>
            <input type="text" placeholder='Correo Electronico' />

            <label htmlFor="">Tu Celular*</label>
            <input type="text" placeholder='Numero de Contacto'/>

            <label htmlFor="">Tu Nombre*</label>
            <input type="text" placeholder='¿Como te llamas?'/>

            <button type='submit'>Enviar!</button>
        </form>
    </div>
  )
}

export default Form