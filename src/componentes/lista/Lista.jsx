import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteUserAsync,
  editarSinc,
  editAsyn,
  handleEdit,
  listUserAsync,
} from "../redux/actions/actionUsers";
import {useForm} from '../../hooks/useForm'
import { Flex } from "../../styles/styles";

export const List = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((store) => store.users);
  console.log('users de la store', users)
  const [edit, setEdit] = useState({});
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [index, setIndex] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [ values, handleInputChange ] = useForm({
    email: '',
    name: ''
})
  // let currentValue
  // function handleChange() {
  //   let previousValue = currentValue
  //   currentValue = users
  //
  //   if (previousValue !== currentValue) {
  //     console.log(
  //       'Some deep nested property changed from',
  //       previousValue,
  //       'to',
  //       currentValue
  //     )
  //   }
  // }
  //
  // const unsubscribe = store.subscribe(handleChange)
  // unsubscribe()

  const handleEdit = (index, users) => {
    console.log(users);
    setEdit({
      user: users[index],
      id:index
    });
    setIndex(index)
  };
  const handleDispatch = (index) => {
    enviarDispatch(index)
  };

  const handleInput = ({ target }) => {
    let value = target.value;
    setBusqueda(value);

    if (value === "") {
      setUsuarios(users);
    }

    let listaFiltrada = users.filter((user) => {
      console.log("user", user);
      return user.name.includes(value);
    });
    setUsuarios(listaFiltrada);
  };
  const handleChangeEdit = () => {
      
      setEdit((prev) => ({
        ...prev, user: {
          ...prev.user, 
          name:values.name,
          email: values.email
        }
      }))
      
      
    };

  const enviarDispatch = (id) => {

    const user = edit.user
    console.log(user);
    dispatch(editAsyn(user.email, user, id))
  }
  
  useEffect(() => {
    dispatch(listUserAsync());
  }, [dispatch]);

  useEffect(() => {
    if (usuarios.length === 0) {
      // let users = state.users
      // setUsuarios(users);
      setIsLoading(false);
    }
    console.log("usERS", usuarios);
  }, [usuarios]);
  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('busqueda', busqueda)
  // }
  return (
    <div>
      {edit && (
        <Flex>
          <h1>Editar</h1>
          <form>
            <label>Nombre antiguo</label>
            <input type="text" placeholder={values.name} name="name" value={values.name} onChange={handleInputChange}></input>
            <label>Correo antiguo </label>
            
            <input type="text" placeholder={values.email} name="email" value={values.email} onChange={handleInputChange}></input>
            <button type="button" onClick={handleChangeEdit}>Actualizar datos</button>
            <button type="button" onClick={handleDispatch}>Enviar datos</button>
          </form>
        </Flex>
      )}
      <input type="text" placeholder="Busqueda" onChange={handleInput}></input>
      <table className="table text-center mt-3">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Nombre</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
            <th scope="col">Editar</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            usuarios.map((e, i) => (
              <tr key={i}>
                <td>
                  <img src={e.urlImg} width="50" height="50" alt="" />
                </td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <input
                    value="Delete"
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={() => dispatch(deleteUserAsync(e.email))}
                  />
                </td>
                <td>
                  <input
                    value="Editar"
                    type="button"
                    className="btn btn-outline-blue"
                    onClick={() => handleEdit(i, usuarios)}
                  />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
