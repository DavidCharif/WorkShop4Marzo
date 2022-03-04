import {  typesUsers } from "../types/types";


const initialState = {
  users : []
}


export const usersReducers = (state = initialState, action) => {
    switch (action.type) {
       
        case typesUsers.list:
            return {
              users: [...action.payload]
            }
        case typesUsers.delete:
            return {
              users: state.users.filter(emp => emp.correo !== action.payload)
            }
        case typesUsers.edit:
            return{
            ...state
            }
        default:
            return state;
    }
}
