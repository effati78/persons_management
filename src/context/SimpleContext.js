import { createContext } from "react";

const SimpleContext = createContext({
  state: {},
  handleShowPersons: () => {},
  handleNameChange: () => {},
  handleDeletePerson: () => {},
  handleNewPerson: () => {},  
  setPerson: () => {}
});

export default SimpleContext;