
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "@firebase/auth";
import { typesRegister } from "../types/types";
const registerSinc = (name,correo,contrasena, urlImg) => {
  console.log('name', name)
  console.log('entro a sincronia')
return{
    type: typesRegister.register,
    payload: {
        name,
        correo,
        contrasena,
        urlImg
    }
 }
}


export const registroEmailPasswordNombre = (email,password,name,urlImg) => {
    return(dispatch) => {
      console.log('fue al distpatcher');
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})
 
           dispatch(registerSinc(user.email,user.uid,user.displayName, urlImg))
            
        })
        .catch(e =>{
            console.log(e, 'error');
        })
    }
}