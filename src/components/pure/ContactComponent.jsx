import React from "react";
import PropTypes from "prop-types";
import "../../assets/styles/components/ContactComponent.css";
import { Contact } from "../../models/Contact.class";

export const ContactComponent = ({ contact, connect, remove }) => {
  const isConected = () => {
    return contact.conectado ? (
      <span
        className="text-success card-action"
        onClick={() => connect(contact)}
      >
        Conectado <i className="bi bi-circle-fill h4"></i>
      </span>
    ) : (
      <span
        className="text-danger card-action"
        onClick={() => connect(contact)}
      >
        Desconectado <i className="bi bi-circle-fill h4"></i>
      </span>
    );
  };
  return (
    <tr>
      <td>
        <span>{contact.nombre}</span>
      </td>
      <td>
        <span>{contact.apellido}</span>
      </td>
      <td>
        <span>{contact.email}</span>
      </td>
      <td>
       <span className="d-flex justify-content-around">
       {isConected()}
        <span className="text-danger h4 card-action" onClick={()=>remove(contact)}>
          <i className="bi bi-trash3-fill"></i>
        </span>
       </span>
      </td>
    </tr>
  );
};

ContactComponent.propTypes = {
  contact: PropTypes.instanceOf(Contact),
};
