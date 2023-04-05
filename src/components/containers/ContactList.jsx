import React from 'react'
import { Contact } from '../../models/Contact.class'
import { ContactComponent } from '../pure/ContactComponent';

export const ContactList = () => {

  const contact = new Contact("Danny","Galvan","cgalvan29111999@gmail.com",false);

  return (
    <div> 
       <ContactComponent contact={contact}/>
    </div>
  )
}

