import { createReducer, createActions } from "reduxsauce";
// import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  createTicket: ["ticket"],
  updateTicket: ["ticket"],
  deleteTicket: ["id"],
  deleteAllTicket: [],
});

export const todoTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  todoList: [],
};

/* ------------- Reducers ------------- */
interface Ticket {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
}

/* --- CRUD ticket --- */
export const createTicket = (state: any, action: { ticket: Ticket }) => {
  const { ticket } = action;
  const { todoList } = state;
  const newList = [ticket, ...todoList];

  return {
    ...state,
    todoList: newList,
  };
};

export const updateTicket = (state: any, action: { ticket: Ticket }) => {
  const { ticket } = action;
  const { todoList } = state;

  const newList = [...todoList];
  const index = todoList.findIndex((t: Ticket) => (t.id === ticket.id));
  newList[index] = ticket;

  return {
    ...state,
    todoList: newList,
  };
};

export const deleteTicket = (state: any, action: { ticket: Ticket }) => {
  const { ticket } = action;
  const { todoList } = state;

  const newList = [...todoList];
  const index = todoList.findIndex((t: Ticket) => (t.id === ticket.id));
  newList.splice(index, 1);

  return {
    ...state,
    todoList: newList,
  };
};

export const deleteAllTicket = (state: any) => {
  return {
    ...state,
    todoList: [],
  };
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.CREATE_TICKET]: createTicket,
  [Types.UPDATE_TICKET]: updateTicket,
  [Types.DELETE_TICKET]: deleteTicket,
  [Types.DELETE_ALL_TICKET]: deleteAllTicket,
});
