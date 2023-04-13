import React, { useRef } from "react";
import { Contact } from "../../models/Contact.class";

export const ContactForm = ({ add }) => {
  const nombre = useRef(null);
  const apellido = useRef(null);
  const email = useRef(null);

  const addContact = (e) => {
    e.preventDefault();
    const tmpContact = new Contact(
      nombre.current.value,
      apellido.current.value,
      email.current.value,
      false
    );
    add(tmpContact);
    e.target.reset();
  };

  return (
    <form className="container-fluid card" onSubmit={addContact}>
      <div className="row">
        <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" name="nombre" id="nombre" className="form-control" ref={nombre} required autoFocus/>
        </div>
        <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="apellido" className="form-label">apellido</label>
            <input type="text" name="apellido" id="apellido" className="form-control" ref={apellido} required autoFocus/>
        </div>
        <div className="col-12 col-lg-6 mb-2">
            <label htmlFor="email" className="form-label">email</label>
            <input type="text" name="email" id="email" className="form-control" ref={email} required autoFocus />
        </div>
        <div className="col-12 col-lg-6 mb-2 d-flex justify-content-center">
           <button className="btn btn-primary" type="submit">Agregar Contacto</button>
        </div>
      </div>
    </form>
  );
};
