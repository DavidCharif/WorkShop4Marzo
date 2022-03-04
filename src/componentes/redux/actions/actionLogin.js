
import {  getAuth, signInWithPopup,signInWithEmailAndPassword , signOut} from "firebase/auth";
import { google } from '../../../firebase/firebaseConfig';
import { typesLogin } from "../types/types";


export const loginEmailPassword = (email,password) =>{
    
    return (dispatch) =>{

       const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
       .then(({user}) =>{
             dispatch(
                loginSincrono(user.uid,user.displayName)
             ) 
             console.log('Bienvenid@');
       })
       .catch(e =>{
            console.log('El usuario no existe');
       })
    }
}

export const loginGoogle = () => {

    return(dispatch) => {
        const auth = getAuth();
        signInWithPopup(auth,google)
        .then(({user}) => {
            dispatch(loginSincrono(user.uid,user.displayName))
            console.log(`Bienvenid@ ${user.displayName}`);
        })
        .catch(e =>{
            console.log(e);
        })
    }
}

export const loginSincrono = (id, displayname) => {

    return{
       type: typesLogin.login,
       payload: {
           id,
           displayname
       }
    }
}

export const actionLogout = () => {
   return {
    type: typesLogin.logout
  }
}

export const logout = () => {

  
      const auth = getAuth();
      console.log("login ouuttt")
      signOut(auth)
      .then(user => {
         console.log(user);
      })
      .catch(error => {
          console.log(error);
      })

}