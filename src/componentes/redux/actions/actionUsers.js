import {updateDoc,collection,getDocs,query,where,doc,deleteDoc} from "@firebase/firestore";
import { db } from "../../../firebase/firebaseConfig";
import { typesUsers } from "../types/types";
//DELETE

export const deleteUserAsync = (email) =>{
  return async(dispatch) => {

      const estCollection = collection(db,"usuarios");
      const q = query(estCollection,where("email","==",email))
     
      const datos = await getDocs(q);
      datos.forEach((docu) => {
          deleteDoc(doc(db,"usuarios",docu.id));
      })
      dispatch(deleteSync(email));
  }
}

export const deleteSync = (email) => {
  return{
      type: typesUsers.delete,
      payload: email
  }
}


//READ

export const listUserAsync = () => {
  return async (dispatch) => {

      const querySnapshot = await getDocs(collection(db, "usuarios"));
      const obj = {
        usuarios : [],
        ids : []
      }
      
      querySnapshot.forEach((doc) => {
       
          obj.usuarios.push({
              ...doc.data()
          })
          obj.ids.push(doc.id)
       
      });
      dispatch(listSync(obj));
  }
}

export const listSync = (users) => {
  console.log('users', users)
  return {
      type: typesUsers.list,
      payload: {
        users: users.usuarios,
        ids: users.ids
      }
  }
}
export const editarSinc = (user) => {
  return {
      type: typesUsers.edit,
      payload: user
  }
}

export const editAsyn = (email, usuario, index) => {
  return async (dispatch) => {
      const traerCollection = collection(db, 'usuarios')
      const q = query(traerCollection, where('email', '==', email))
      const datosQ = await getDocs(q)
      console.log(datosQ, 'datos q');
      let id
      datosQ.forEach(async(docu) => {
          id = docu.id
      })
      console.log(id);

      const docRef = doc(db, 'usuarios', id)
      await updateDoc(docRef, usuario)
      .then(() => listUserAsync())
      dispatch(editSyn(usuario, index))
  }
}

export const editSyn = (usuario, id) => {
  console.log('Entramos con el usuario' , usuario)
  return  {
      type: typesUsers.edit,
    
      payload: {
        id:id,
        user:usuario
      }
  }
}