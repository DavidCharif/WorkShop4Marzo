import { Form, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";


import {useDispatch} from 'react-redux'
import { collection } from 'firebase/firestore';

import { useForm } from '../../hooks/useForm';
import { db } from '../../firebase/firebaseConfig';
import { registroEmailPasswordNombre } from '../redux/actions/actionRegister';

export const Registro = () => {

    const dispatch = useDispatch();

    const [formValues, handleInputChange] = useForm({
      name:'',
      correo: '',
      urlImg: '',
      contrasena: ''
    });
    const estCollection = collection(db,"usuarios");
    console.log(estCollection);
    const { nombre, correo, urlImg, contrasena } = formValues;

    const handleRegistro = (e) => {
        e.preventDefault();
        
        dispatch(registroEmailPasswordNombre(correo,contrasena,nombre, urlImg))
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
                <Form.Group>

                </Form.Group>

              


                <Button variant="primary" type="submit">
                    Registrarse
                </Button>

                <Link to="/login">Login</Link>

            </Form>

        </div>
    )
}