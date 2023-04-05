import React from 'react'
import PropTypes from 'prop-types';
import "../../assets/styles/components/ContactComponent.css"
import { Contact } from '../../models/Contact.class';

export const ContactComponent = ({contact}) => {
  return (
    <article className='card'>
      <h1>Nombre: {contact.nombre}</h1>
      <h2>Apellido: {contact.apellido}</h2>
      <h3>Email: {contact.email}</h3>
      <h4>Conectado: {contact.conectado ? "Contacto En Linea" : "Contacto No Disponible"}</h4>
    </article>
  )
}

ContactComponent.propTypes = {
     contact: PropTypes.instanceOf(Contact),
}
