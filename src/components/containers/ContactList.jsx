import React, { useState } from "react";
import { Contact } from "../../models/Contact.class";
import { ContactComponent } from "../pure/ContactComponent";
import { ContactForm } from "../forms/ContactForm";

export const ContactList = () => {
  const contact1 = new Contact("Danny", "Galvan", "galvan@gmail.com", false);
  const contact2 = new Contact("Enrique", "Galdamez", "prueb@gmail.com", false);
  const contact3 = new Contact("Kevin", "Hernan", "kevin@gmail.com", false);
  const contact4 = new Contact("Luis", "Fernandez", "luis@gmail.com", false);

  const [contacts, setContacts] = useState([
    contact1,
    contact2,
    contact3,
    contact4,
  ]);

  const toggleConnect = (contact) => {
    const tmpContact = [...contacts];
    const indx = tmpContact.indexOf(contact);
    tmpContact[indx].conectado = !tmpContact[indx].conectado;
    setContacts(tmpContact);
  };

  const deleteContact = (contact) => {
    const tmpContact = [...contacts];
    const indx = tmpContact.indexOf(contact);
    tmpContact.splice(indx, 1);
    setContacts(tmpContact);
  };

  const addContact = (contact) => {
    const tmpContact = [...contacts];
    tmpContact.push(contact);
    setContacts(tmpContact);
  };

  return (
    <div className="container-fluid card">
      <div className="card-header">
        <h2 className="text-center fw-bold">Estos son tus contactos</h2>
      </div>
      <div className="card-body">
        <div className="table-responsive" style={{height: '500px'}}>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c, indx) => (
                <ContactComponent
                  key={indx}
                  contact={c}
                  connect={toggleConnect}
                  remove={deleteContact}
                />
              ))}
            </tbody>
          </table>
        </div>
        <ContactForm add={addContact} />
      </div>
    </div>
  );
};
