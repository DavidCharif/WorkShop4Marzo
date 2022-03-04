import { typesLogin} from '../types/types';

const intialState = {
  id :"",
  name: ""
}

export const loginReducer = (state = {intialState}, action) => {
    switch (action.type) {
        case typesLogin.login:

        return{
            id: action.payload.id,
            name: action.payload.displayname
        }
        case typesLogin.logout:
          return{
            
          }

        default:
          return state;
    }
}