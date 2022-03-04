import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { collection } from "firebase/firestore";

import { useForm } from "../../hooks/useForm";
import { db } from "../../firebase/firebaseConfig";
import { registroEmailPasswordNombre } from "../redux/actions/actionRegister";
import { fileUpload } from "../../helpers/FileUpload";
import { useState } from "react";

export const Registro = () => {
  const dispatch = useDispatch();
  const [urlImg, setUrlImg] = useState('')
  const [formValues, handleInputChange] = useForm({
    name: "",
    correo: "",
    contrasena: "",
  });
  const estCollection = collection(db, "usuarios");
  console.log(estCollection);
  const { nombre, correo, contrasena } = formValues;

  const handleRegistro = (e) => {
    e.preventDefault();
    console.log("entro a registro");
    dispatch(registroEmailPasswordNombre(correo, contrasena, nombre, urlImg));
  };

  const handleFileChange = ({target}) => {
    const file = target.files[0]
    fileUpload(file)
      .then(res => {
        console.log('Entro la url', res)
        setUrlImg(res)
      })
      .catch(e => console.log(e))
      
  }

  return (
    <div>
      <Form onSubmit={handleRegistro}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name="correo"
            value={correo}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="contrasena"
            value={contrasena}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicImage">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="file"
                        placeholder="Agregar foto"
                        name="urlImg"
                        onChange={handleFileChange}


                    />
                </Form.Group>

        <Button variant="primary" type="submit">
          Registrarse
        </Button>

        <Link to="/login">Login</Link>
      </Form>
    </div>
  );
};
