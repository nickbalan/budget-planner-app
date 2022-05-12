import { createContext, useReducer } from "react";

/* Updates the state based on the action */
const AppReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

/* Sets the initial state when the app is loaded */
const initialState = {
  budget: 5000,
  expenses: [
    { id: 12, name: 'Shopping', cost: 40 },
    { id: 13, name: 'Holiday', cost: 500 },
    { id: 13, name: 'Car service', cost: 50 },
  ],
};

/* Creates the app context that our components imports and use to get the state */
export const AppContext = createContext();

/* The Provider wraps the components we want to give access to the state */
/* Accepts the children, which are the nested(wrapped) components */
export const AppProvider = (props) => {
  /* Sets up the app state and takes a reducer and an initial state */
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>)
};