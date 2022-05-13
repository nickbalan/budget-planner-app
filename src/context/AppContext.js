import React, { createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

/* Updates the state based on the action */
const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case 'DELETE_EXPENSE':
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case 'SET_BUDGET':
      return {
        ...state,
        budget: action.payload,
      }
    default:
      return state;
  };
};

/* Sets the initial state when the app is loaded */
const initialState = {
  budget: 5000,
  expenses: [
    { id: uuidv4(), name: 'Shopping', cost: 100 },
    { id: uuidv4(), name: 'Holiday', cost: 500 },
    { id: uuidv4(), name: 'Car service', cost: 50 },
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
        expenses: state.expenses,
        budget: state.budget,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};