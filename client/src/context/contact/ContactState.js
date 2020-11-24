import React, { userReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 2,
        name: "John Johnson",
        email: "john@email.com",
        phone: "111-111-1111",
        type: "personal",
      },
      {
        id: 3,
        name: "Jack Johnson",
        email: "jack@email.com",
        phone: "111-111-1111",
        type: "professional",
      },
    ],
  };
  const [state, dispatch] = userReducer(contactReducer, initialState);

  //    Add Contact

  //    Delete Contact

  //    Set current Contact

  //    Clear Current Contact

  //    Update Contact

  //    Filter Contacts

  return (
    <ContactContext.Provider value={{ contacts: state.contacts }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
