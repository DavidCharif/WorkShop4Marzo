
import { addDoc,collection} from "@firebase/firestore";
import {  getAuth, createUserWithEmailAndPassword, updateProfile  } from "@firebase/auth";
import { typesRegister } from "../types/types";
import { db } from "../../../firebase/firebaseConfig";
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

export const registerUserAsync = (newUser) => {
console.log('entro asinc')
  return(dispatch) => {

      addDoc(collection(db,"usuarios"),newUser)
      .then(resp => {
          dispatch(registerUserSync(newUser))
          
      })
      .catch(error => {
          console.log(error);
      })
  }
}

export const registerUserSync = (newUser) => {
  return{
      type: typesRegister.register,
      payload: newUser
  }

}


export const registroEmailPasswordNombre = (email,password,name,urlImg) => {
  let newUser = {
    email, password,name, urlImg
  }
    return(dispatch) => {
      console.log('fue al distpatcher');
        const auth = getAuth();
        createUserWithEmailAndPassword(auth,email,password)
        .then(async ({user}) => {

           await updateProfile(auth.currentUser, {displayName: name})
 
           dispatch(registerSinc(user.email,user.uid,user.displayName, urlImg))
           dispatch(registerUserAsync(newUser)) 
        })
        .catch(e =>{
            console.log(e, 'error');
        })
    }
}

//CREATE

