
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "@firebase/auth";
const registerSinc = (name,correo,urlImg,contrasena) => {
  return {
    name:'',
    correo: '',
    urlImg: '',
    contrasena: ''
  }
}


export const registroEmailPasswordNombre = (email,password,name,urlImg) => {
    return(dispatch) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})

           dispatch(registerSinc(user.email,user.uid,user.displayName, urlImg))
            
        })
        .catch(e =>{
            //console.log(e);
        })
    }
}