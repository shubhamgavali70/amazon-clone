import React, { createContext, useReducer, useContext } from "react";
//Prepares the data layer
export const StateContext = createContext();

//Wrap our app and provide the data layer to all components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//Pull info from the data layer
export const useStateValue = () => useContext(StateContext);
