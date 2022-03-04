import { typesRegister } from "../types/types"

const initialState = {
  "name":'',
  "correo": '',
  'urlImg' : '',
  'contrasena ' : ''
}

export const reducerRegister  = (state={initialState}, action) =>{
 switch(action.type){
   case(typesRegister.register):
   const {name,correo,urlImg,contrasena} = action.payload   
   let newObj = {
    name, correo, urlImg, contrasena
   }
   return {
        ...state, newObj
      }
  default: 
  return state
 }
}