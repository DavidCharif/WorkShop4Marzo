import {  typesUsers } from "../types/types";


const initialState = {
  users : [],
  ids:[]
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
       
        case typesUsers.list:
            return {
              state : {
                users:[...action.payload.users],
                ids: action.payload.ids
              }
              
            }
        case typesUsers.delete:
            return {
              ...state,
              users: state.users.filter(emp => emp.correo !== action.payload)
            }
        case typesUsers.edit:
          
          state[action.payload.id]= action.payload.user 
          
            return{
              ...state,
            }
        default:
            return state;
    }
}
